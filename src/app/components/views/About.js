import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      document.body.setAttribute("id", "about");
      document.title = "about";
      this.props.pageChange("about");
    }
    render() {
  
      return (
        <div>
          <h2>About - {this.props.path}</h2>
          <p>paragraph</p>
        </div>
      );
    }
  }

  export default About;