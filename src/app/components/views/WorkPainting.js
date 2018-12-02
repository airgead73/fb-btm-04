import React, { Component } from 'react';

class WorkPainting extends Component {
    componentDidMount() {
      document.body.setAttribute("id", "workPainting");
      document.title = "work | painting";
      this.props.pageChange("workPainting");
    }
    render() {
  
      return (
        <div>
          <h2>WorkPainting - {this.props.path}</h2>
          <p>paragraph</p>
        </div>
      );
    }
  }

  export default WorkPainting;