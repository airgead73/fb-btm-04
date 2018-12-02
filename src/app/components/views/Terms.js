import React, { Component } from 'react';

class Terms extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange(this.props.path);
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