import React from 'react';
import Results from "./components/plot/src/plot/Results"
import Input from './components/Input'

import KeywordPlot from './components/plot/index.js';
import { appConfig } from './config.js';
import { get_min_value, get_max_value, capitalizeString } from './components/plot/src/plot/utils/functions';

import Loader from "react-loader-spinner";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

let dimensions = appConfig.dimensions;

const MA_Day_5 = "5 Day MA for ";
const LOWER_BAND = "Lower Band for ";
const UPPER_BAND = "Upper Band for ";


const ratio = 4.5;

const SECONDS_NUMBER = 60;

class App extends React.PureComponent {
  
    constructor(props){
      super(props);
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      // this.handleHoverOff = this.handleHoverOff.bind(this);

      // this.timer = 0;
      // this.startTimer = this.startTimer.bind(this);
      // this.countDown = this.countDown.bind(this);

      this.state = {
        username: "user",
        displayResults: false,
        fetching_results: false,
        displayError: false,

        region_state: "US",
        selected_time_frame: "today 5-y",
        keywords: [],
        data: [],

        
        error_message: "",
        
        time: {},
        // seconds: SECONDS_NUMBER,
      };

      this.myRef = React.createRef();

    }

    fetchCallback = (keywords, selected_state_name, selected_time_frame) => {
      this.setState({
          displayResults: false,
          region_state: selected_state_name.toUpperCase(),
      });

      this.fetchData(keywords, selected_state_name, selected_time_frame)
    }

    errorCallback = (message) => {

      this.setState({
        displayError: true,
        error_message: message,
      });

      window.setTimeout(() => {
        this.setState({
          displayError: false
        });
      }, 2000);

    }

    mapCallback = (state) => {

      this.setState({
        displayResults: false,
        region_state: state.toUpperCase(),
      });

      this.fetchData(this.state.keywords, state, this.state.selected_time_frame)
    }

    fetchData(keywords, state, selected_time_frame){

      let url = "/data"
      // let url = appConfig.KEYWORDS_DATA2

      this.setState({
        fetching_results: true,
        keywords: keywords
      })

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type':'application/json',
        },
        body: JSON.stringify({
          keywords: keywords, region_state: state, time_frame: selected_time_frame
        }),
      }).then(res => res.json())
        .then(
        (result) => {
          let width = this.myRef.current.offsetWidth;
          let sizes = this.get_dimensions(width);

          this.setState({
            keywords: keywords,
            displayResults: true,
            fetching_results: false,

            region_state: state.toUpperCase(),
            selected_time_frame: selected_time_frame,

            data: this.get_data2(keywords, result),
            
            div_height: sizes.height,
            width: width,
          });
        }).catch(function(error) {
        console.log(error)
        })
      }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
      this.myRef.current.focus();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
   
    updateWindowDimensions() {
      let width = this.myRef.current.offsetWidth;
      let sizes = this.get_dimensions(width);

      this.setState({
        div_height: sizes.height,
        width: width,
      });
    }


    handleMouseMove= () => {
    }

    render() {

      let plot_settings = {
        title: "Trends Forecast",
        x_label: "Date",
        y_label: "Search interest (%)",

        number_of_series: this.state.keywords.length,
        keywords: this.state.keywords,

        height: this.state.div_height,
        width: this.state.width

      }

        return (
          <div ref={this.myRef} onMouseMove={this.handleMouseMove} onMouseLeave={this.handleHoverOff}>
            
            <div className="main_results">
              <Input callbackFromParent={this.fetchCallback} errorTimeframeCallback={this.errorCallback} />

              { (this.state.displayError) ? (<div className="error_message">{this.state.error_message}</div>) : (<div><br/></div>)}

            { (this.state.displayResults) ? (
            
            <div className="content">
              <div className="results_div">
                  <KeywordPlot plot_settings={plot_settings} data={this.state.data} />

              </div>

            </div>  ) : (
            
            <div>
              {/* <div className="intro">

              </div> */}
              {this.state.fetching_results ? (    
                <div className="spinner">
                  <Loader type="Oval" color="#1694d0" height={200} width={200} timeout={30000} />
                </div>   
                ) : (<div></div>) }
            </div>
            )
          }

          </div>
        </div>
      );
      
    }
    
      get_data(keywords, result) {
        let historical_data = []
        let forecasted_data = []

        for (let keyword in keywords) {  
          let index = 0;
          let k_w = keywords[keyword]
          let length = Object.keys(result[k_w]).length - 60;
          console.log(Object.keys(result[k_w]).length)
          
          let arr = Object.keys(result[k_w]).map(
            function(key) {
              if(result[k_w][key] !== null){
                if (index < 4) {
                  return [index++, new Date(key).valueOf(), result[k_w][key], result[LOWER_BAND+k_w][key], result[UPPER_BAND+k_w][key]]
                } else {
                  return [index++, new Date(key).valueOf(), result[MA_Day_5+k_w][key], result[LOWER_BAND+k_w][key], result[UPPER_BAND+k_w][key]]
                }
              } 
            }
          );

          historical_data.push(arr.slice(0, index))

          arr = Object.keys(result[keywords[keyword] + "F"]).map(
            function(key) {
              if (index < 4) {
                return [index++, new Date(key).valueOf(), result[keywords[keyword] + "F"][key], result[LOWER_BAND+k_w+ "F"][key], result[UPPER_BAND + k_w + "F"][key]]            
              } else {
                return [index++, new Date(key).valueOf(), result[MA_Day_5 + k_w + "F"][key], result[LOWER_BAND + k_w + "F"][key], result[UPPER_BAND + k_w + "F"][key]]
              }
            }
          );

          forecasted_data.push(arr.slice(length, length + 52))
        }

        return {
          historical_data: historical_data,
          forecasted_data: forecasted_data
        }

      }

      get_data2(keywords, result) {
        let historical_data = []
        let forecasted_data = []

        for (let keyword in keywords) {  
          let index = 0;
          let k_w = keywords[keyword]
          let length = Object.keys(result.historical_data).length

          
          let arr = Object.keys(result.historical_data).map(
            function(key) {
              if(result.historical_data[key] !== null){
                if (index < 4) {
                  return [index++, new Date(key).valueOf(), result.historical_data[key][k_w].value, result.historical_data[key][k_w].L_B, result.historical_data[key][k_w].U_B]
                } else {
                  return [index++, new Date(key).valueOf(), result.historical_data[key][k_w].M_A, result.historical_data[key][k_w].L_B, result.historical_data[key][k_w].U_B]
                }
              } 
            }
          );
  
          historical_data.push(arr.slice(0, index))
  
          arr = Object.keys(result.forecasted_data).map(
            function(key) {
              if (index < 4) {
                return [index++, new Date(key).valueOf(), result.forecasted_data[key][k_w].value, result.forecasted_data[key][k_w].L_B, result.forecasted_data[key][k_w].U_B]
              } else {
                return [index++, new Date(key).valueOf(), result.forecasted_data[key][k_w].M_A, result.forecasted_data[key][k_w].L_B, result.forecasted_data[key][k_w].U_B]
              }
            }
          );
  
          forecasted_data.push(arr.slice(length, length + 52))
        }

        return {
          historical_data: historical_data,
          forecasted_data: forecasted_data
        }
  
      }

  get_dimensions(width) {
    let height = width/(ratio);

    if (width>1800) {
      height = height;
    }

    if (width<=1800) {
      height = (1.2)*width/(ratio);
    }

    if (width<=1600) {
      height = (1.4)*width/(ratio);
    }
    
    if (width<=1400) {
      height = (1.7)*width/(ratio);
    }

    if (width<=1200) {
      height = (2.2)*width/(ratio);
    }

    if (width<=700) {
      height = (3.4)*width/(ratio);
    }

    let sizes = {
      height: height,
    }

    return sizes;
  }
}
  
  
export default App;
