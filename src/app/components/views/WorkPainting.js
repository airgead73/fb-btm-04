import React, { Component } from 'react';


class WorkPainting extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange(this.props.path);
      this.props.galleryChange("main", "drawing");
    }
    render() {
  
      return (

            <h1>Work Painting | {this.props.gallery}</h1>

      );
    }
  }

  export default WorkPainting;