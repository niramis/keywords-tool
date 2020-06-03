import React, { Component } from 'react';

class Results extends Component {	

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      // keywords: this.props.keywords,
    }
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="header">

      </div>
		);
  }
}


function formatDate(d)
 {
  let date = new Date(d)
  var dd = date.getDate(); 
  var mm = date.getMonth()+1;
  var yyyy = date.getFullYear(); 
  if(dd<10){dd='0'+dd} 
  if(mm<10){mm='0'+mm};
  return d = dd+'-'+mm+'-'+yyyy
}

export default Results