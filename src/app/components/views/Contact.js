import React, { Component } from 'react';

class Contact extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange(this.props.path);
    }
    render() {
  
      return (
        <div>
          <h2>Contact - {this.props.path}</h2>
          <p>paragraph</p>
        </div>
      );
    }
  }

  export default Contact;