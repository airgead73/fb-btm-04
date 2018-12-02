import React, { Component } from 'react';

class About extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange(this.props.path);
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