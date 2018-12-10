import React, { Component } from 'react';

class SculpturePortrait extends Component {
  componentDidMount() {
    document.body.setAttribute("id", this.props.id);
    document.title = this.props.title;
    this.props.pageChange(this.props.path);
    this.props.galleryChange("sub", "portrait");
  }
    render() {
  
      return (
           
        <h1>{this.props.gallery}</h1>

      );
    }
  }
  
  export default SculpturePortrait;