import React, { Component } from 'react';

class WorkAll extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      document.body.setAttribute("id", "WorkAll");
      document.title = "WorkAll";
      this.props.pageChange("WorkAll");
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