import React, { Component } from 'react';

class Terms extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      document.body.setAttribute("id", "Terms");
      document.title = "Terms";
      this.props.pageChange("Terms");
    }
    render() {
  
      return (
        <div>
          <h2>Terms - {this.props.path}</h2>
          <p>paragraph</p>
        </div>
      );
    }
  }

  export default Terms;