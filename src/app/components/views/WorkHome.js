import React, { Component } from 'react';

class WorkHome extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      document.body.setAttribute("id", "WorkHome");
      document.title = "WorkHome";
      this.props.pageChange("WorkHome");
    }
    render() {
  
      return (
        <div>
          <h2>WorkHome - {this.props.path}</h2>
        </div>
      );
    }
  }

  export default WorkHome;