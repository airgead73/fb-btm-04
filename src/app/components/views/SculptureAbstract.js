import React, { Component } from 'react';
class SculptureAbstract extends Component {
  componentDidMount() {
    document.body.setAttribute("id", this.props.id);
    document.title = this.props.title;
    this.props.pageChange(this.props.path);
    this.props.galleryChange("sub", "abstract");
  }
    render() {
  
      return (

        <h1>{this.props.gallery}</h1>

      );
    }
  }
  
  export default SculptureAbstract;