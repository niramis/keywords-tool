from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
from mp_forecaster import main
import pandas as pd
import json
import multiprocessing as mp

class InfiniteDict(dict):
    def __missing__(self, val):
        d = InfiniteDict()
        self[val] = d
        return d

# set the project root directory as the static folder, you can set others.
app = Flask(__name__,
            static_url_path='',
            static_folder='client/build')

CORS(app)

@app.route('/')
def root():
    return app.send_static_file('index.html')


@app.route('/data', methods=['POST'])
def get_data2():
    keywords = request.json['keywords']
    state = request.json['region_state'].upper()

    h_df, f_df = main(keywords, state)

    dictionary = InfiniteDict()
    
    MA_Day_5 = "5 Day MA for ";
    LOWER_BAND = "Lower Band for ";
    UPPER_BAND = "Upper Band for ";

    historical = "historical_data"
    forecasted = "forecasted_data"

    value = "value"
    M_A = "M_A"    
    L_B = "L_B"
    U_B = "U_B"

    h_df = h_df.replace({pd.np.nan: None})
    f_df = f_df.replace({pd.np.nan: None})
    
    
    for keyword in keywords:
        for index, row in h_df.iterrows():
            dictionary[historical][index.isoformat()][keyword][value] = row[keyword]
            dictionary[historical][index.isoformat()][keyword][M_A] = row[MA_Day_5 + keyword]
            dictionary[historical][index.isoformat()][keyword][L_B] = row[LOWER_BAND + keyword]
            dictionary[historical][index.isoformat()][keyword][U_B] = row[UPPER_BAND + keyword]

        for index, row in f_df.iterrows():
            dictionary[forecasted][index.isoformat()][keyword][value] = row[keyword]
            dictionary[forecasted][index.isoformat()][keyword][M_A] = row[MA_Day_5 + keyword]
            dictionary[forecasted][index.isoformat()][keyword][L_B] = row[LOWER_BAND + keyword]
            dictionary[forecasted][index.isoformat()][keyword][U_B] = row[UPPER_BAND + keyword]


    return json.dumps(dictionary)

if __name__ == '__main__':
    app.run()


