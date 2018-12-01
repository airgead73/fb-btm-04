import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      document.body.setAttribute("id", "contact");
      document.title = "contact";
      this.props.pageChange("contact");
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