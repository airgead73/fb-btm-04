import React, { Component } from 'react';

class WorkPainting extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      document.body.setAttribute("id", "WorkPainting");
      document.title = "WorkPainting";
      this.props.pageChange("WorkPainting");
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