import React, { Component } from 'react';

class WorkAll extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      document.body.setAttribute("id", "workAll");
      document.title = "work | all";
      this.props.pageChange("workAll");
    }
    render() {
  
      return (
        <div>
          <h2>WorkAll - {this.props.path}</h2>
          <p>paragraph</p>
        </div>
      );
    }
  }

  export default WorkAll;