import React, { Component } from 'react';

class WorkAll extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange(this.props.path);
    }
    render() {
  
      return (
        <div>
          <h2>WorkAll - {this.props.path}</h2>
          <p>paragraph</p>
        </div>
      );
    }
  }

  export default WorkAll;