import React, { Component } from 'react';

class WorkHome extends Component {
    componentDidMount() {
      document.body.setAttribute("id", "workHome");
      document.title = "work home";
      this.props.pageChange("workHome");
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