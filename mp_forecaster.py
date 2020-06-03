
#init_logger
import logging
import sys

#internet_on
import urllib.request
import urllib.error

#get_gt_data
from pytrends.request import TrendReq

#forecast_keyword
# import fbprophet_log_override
from fbprophet import Prophet

#combine_timelines
import pandas as pd

#profiler
import cProfile
import pstats 
import io

#check_core_num
import multiprocessing as mp

#rankers
from datetime import date
import datetime as DT
import math

#date_cutter
import datetime as DT
from datetime import date

#proj_growth_rate
import math

kw_list = ['k1','k2','k3']
GEO_IN = 'US'
freq =' W'
periods = 52

DEBUG = True
  
    
def set_up(kw_list=['k1'], geo_in = 'US', timeframe='today 5-y', span=5):
    
    rankers_list = ['proj_growth', 'growth_rate_ranker']
    if timeframe == 'today 5-y':
        periods = 52
        freq =' W'
    else:
        pass # can be extended to other granularitie 
    
    return kw_list, geo_in, timeframe, periods, freq, span, rankers_list
    logger.info('Input set')
 
    
def get_gt_data(kw_list, geo_in, timeframe):
    try:
        pytrends = TrendReq(hl='en-US', tz=360)
        pytrends.build_payload(kw_list=kw_list)
        pytrends.build_payload(kw_list=kw_list, cat=0,
                               timeframe=timeframe, geo=geo_in, gprop='')
        keyword_dataframe = pytrends.interest_over_time()
        keyword_dataframe = keyword_dataframe.drop(columns=['isPartial'])
        return keyword_dataframe

    except Exception as e:
        return None
 
def data_preprocessing(keyword_dataframe, keyword):

    hist_kw = keyword_dataframe[keyword]
    prep_kw = hist_kw.reset_index()
    hist_kw = hist_kw.to_frame()
    prep_kw.columns = ['ds', 'y']

    return prep_kw, hist_kw

    
def forecast_keyword(keyword, prep_kw, freq, periods):

    model = Prophet(daily_seasonality=False,
                        weekly_seasonality=False,
                        yearly_seasonality=True,
                        seasonality_mode='multiplicative',
                        uncertainty_samples = 50)
    model.fit(prep_kw)
    forecasted_kw = model.make_future_dataframe(periods, freq)
    forecast = model.predict(forecasted_kw)
    forc_kw = forecast[['ds', 'yhat']]
    forc_kw.columns = ['date', keyword]
    forc_kw = forc_kw.set_index('date')

    return forc_kw

def mp_forecast(tup):
    x = forecast_keyword(tup[0], tup[1], freq, periods)
    return x


    

def add_bbs(time_series, keyword, span_manual):

    time_series['{} Day STD for {}'.format(span_manual, keyword)] = time_series[keyword].rolling(
        window=span_manual).std()
    time_series['{} Day MA for {}'.format(span_manual, keyword)] = time_series[keyword].rolling(
        window=span_manual).mean()
    time_series['Upper Band for {}'.format(keyword)] = time_series['{} Day MA for {}'.format(
        span_manual, keyword)] + (time_series['{} Day STD for {}'.format(span_manual, keyword)] * 2)
    time_series['Lower Band for {}'.format(keyword)] = time_series['{} Day MA for {}'.format(
        span_manual, keyword)] - (time_series['{} Day STD for {}'.format(span_manual, keyword)] * 2)

    return time_series

def work_bench(function):
    
    def inner(*args, **kwargs):
        
        bench = cProfile.Profile()
        bench.enable()
        retval = function(*args, **kwargs)
        bench.disable()
        s = io.StringIO()
        sortby = 'cumulative'
        
        bench = pstats.Stats(bench, stream=s).sort_stats(sortby)
        bench.print_stats()
        print(s.getvalue())
        return retval

    return inner

def date_cutter(forc_df):

    try:
        today = date.today()
        current_day = today.strftime("%Y-%m-%d")
        forc_df_cut = forc_df[(forc_df.index > current_day)]
        return forc_df_cut
    
    except Exception as e:
        return None


def main(keywords, state):    
    # init_logger()
    if DEBUG == True:
        global hist_kw, forc_kw, kw_list, final_dataframe_historical, final_dataframe_forecasted, counter,freq, periods, span
        #global hist_df_fin
    

    kw_list, geo_in, timeframe, periods, freq, span, rankers_list = set_up(kw_list=keywords, geo_in =state)
    keyword_dataframe = get_gt_data(kw_list, geo_in, timeframe)
    
    list_of_names = []
    list_of_dfs = []
    counter1 = 0
    for keyword in keyword_dataframe.columns:
        list_of_names.append(keyword)
        prep_kw, hist_kw = data_preprocessing(keyword_dataframe,keyword)
        list_of_dfs.append(prep_kw)
        hist_kw_bb = add_bbs(hist_kw, keyword, span)
        
        if counter1 == 0:
            hist_df_fin = hist_kw_bb
        else:
            hist_df_fin = pd.merge(hist_df_fin, hist_kw, on='date')
        counter1 += 1
        
    list_of_tup = list(zip(list_of_names,list_of_dfs))

    p = mp.Pool(mp.cpu_count())
    result = p.map(mp_forecast,list_of_tup)
    p.close()
    p.join()
    
    forc_df = pd.concat(result, axis=1)
    
    counter2 = 0
    for keyword in forc_df.columns:
        forc_kw = forc_df[keyword]
        forc_kw = forc_kw.to_frame()
        forc_kw = add_bbs(forc_kw, keyword, span)
        
        if counter2 == 0:
            forc_df_fin = forc_kw
        else:
            forc_df_fin = pd.merge(forc_df_fin, forc_kw, on='date')
        counter2 += 1
    
    return hist_df_fin, forc_df_fin

if __name__ == '__main__':
    print("main")