import React, { Component } from 'react';

class WorkHome extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = "WorkHome.js";
    }
    render() {
  
      return true;
   
    }
  }

  export default WorkHome;