import React, { Component } from 'react';

class WorkSculpture extends Component {
  componentDidMount() {
    document.body.setAttribute("id", this.props.id);
    document.title = this.props.title;
    this.props.pageChange(this.props.path);
  }
    render() {
  
      return (
        <div>
          <h1>{this.props.path}</h1>
        </div>
      );
    }
  }
  
  export default WorkSculpture;