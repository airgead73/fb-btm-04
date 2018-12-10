import React, { Component } from 'react';
import BMGallery from '../gallery/BMGallery';


class WorkSculpture extends Component {
  componentDidMount() {
    document.body.setAttribute("id", this.props.id);
    document.title = this.props.title;
    this.props.pageChange(this.props.path);
    this.props.galleryChange("sub", "sculpture");
  }
    render() {
  
      return (

      <div>
          <BMGallery photos={this.props.gallery} direction={"rows"}/>
          {this.props.children}
      </div>          

      );
    }
  }
  
  export default WorkSculpture;