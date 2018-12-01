import React, { Component } from 'react';

class WorkSculpture extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      document.body.setAttribute("id", "workSculpture");
      document.title = "work | sculpture";
      this.props.pageChange("workSculpture");
    }
    render() {
  
      return (
        <div>
          <h2>WorkSculpture - {this.props.path}</h2>
          <p>paragraph</p>
        </div>
      );
    }
  }
  
  

  export default WorkSculpture;