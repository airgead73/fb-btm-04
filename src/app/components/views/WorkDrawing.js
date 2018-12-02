import React, { Component } from 'react';

class WorkDrawing extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange(this.props.path);
    }
    render() {
  
      return (
        <div>
          <h1>{this.props.page}</h1>
        </div>
      );
    }
  }

  export default WorkDrawing;