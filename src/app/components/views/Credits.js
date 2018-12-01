import React, { Component } from 'react';

class Credits extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      document.body.setAttribute("id", "Credits");
      document.title = "Credits";
      this.props.pageChange("Credits");
    }
    render() {
  
      return (
        <div>
          <h2>Credits - {this.props.path}</h2>
          <p>paragraph</p>
        </div>
      );
    }
  }

  export default Credits;