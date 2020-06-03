import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import { USA_STATES } from '../states.js';

const time_frames = [
    [0, "Weekly", "today 5-y"],
    [1, "Daily", "today 12-m"],
    [2, "Hourly", "today 1-m"],
]

class InputComponent extends Component {	

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.selectedState = this.selectedState.bind(this);
        this.selectedTimeFrame = this.selectedTimeFrame.bind(this);
        this.state = {
            keywords: [],
            selected_state_name: USA_STATES[0][0],
            selected_time_frame: time_frames[0][2]
        };
    }

    handleClick(event){
        event.preventDefault();

        let keywords = this.arrayTrim(this.state.keywords);
        let selectedState = this.state.selected_state_name;
        let selectedTimeFrame = this.state.selected_time_frame;

        if (selectedTimeFrame === time_frames[0][2]) {
            if (keywords.length<=5) {
                this.props.callbackFromParent(keywords, selectedState, selectedTimeFrame);    
            } else {
                this.props.errorTimeframeCallback("Too many keywords")    
            }
            
        } else {
            this.props.errorTimeframeCallback("Incorrect Forecast Granularity")
        }
    }

    selectedState(event){
        this.setState({
            selected_state_name: event.target.value.split(',')[0]
        });
    }

    selectedTimeFrame(event){
        this.setState({
            selected_time_frame: event.target.value.split(',')[2]
        });
    }

    handleChange(event) {

        let array = event.target.value.split(',')

        this.setState({
            keywords: array,
        });
    }

    arrayTrim(array){
        let result = array.map(function (el) {
            return el.trim();
        });

        return result;
    }
    
    render() {
        let namesList = USA_STATES.map(function(state){
            return <option key={state[1]} value={state}>{state[2]}</option>;
        })

        let time_framesList = time_frames.map(function(time_frame){
            return <option key={time_frame[0]} value={time_frame}>{time_frame[1]}</option>;
        })

        return (
            <div className="input_bar input-bar-item width100">
                <Form onSubmit={this.handleClick} className="input_form">
                    <Form.Group className="form-inline">
                        <div className="keyword_div"> 
                            <div className="col-12">
                                <div className="form-row">
                                    <label className="col-input-keywords-label col-form-label input_label" htmlFor="keywords_input">Keywords</label>
                                    <Form.Control className="col-input-keywords" type="text" placeholder="Enter keywords" value={this.state.keywords} onChange={this.handleChange} id="keywords_input" />
                                </div>
                            </div>
                        </div>

                        <div className="state_select_div">
                            <div className="col-12">
                                <div className="form-row">
                                        <label className="label-select-state col-form-label input_label" htmlFor="select_state_input">Location</label>
                                    
                                        <Form.Control as="select" onChange={this.selectedState}  id="select_state_input" className="col-input-state">
                                            {namesList}
                                        </Form.Control>                                
                                        <div className="input_button col-button">
                                            <Button variant="primary" type="submit" className="btn-blue">Submit</Button>
                                        </div> 
                                </div>
                            </div>
                        </div>
                    </Form.Group>
                </Form>
            </div>
		);
    }
}

export default InputComponent
