import React, { Component } from 'react';

class WorkPainting extends Component {
    constructor(props) {
      super(props);
    }
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