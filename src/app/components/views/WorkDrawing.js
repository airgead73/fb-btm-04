import React, { Component } from 'react';

class WorkDrawing extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      document.body.setAttribute("id", "workDrawing");
      document.title = "work | drawing";
      this.props.pageChange("WorkDrawing");
    }
    render() {
  
      return (
        <div>
          <h2>WorkDrawing - {this.props.path}</h2>
          <p>paragraph</p>
        </div>
      );
    }
  }

  export default WorkDrawing;