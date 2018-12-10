import React, { Component } from 'react';
import BMGallery from '../gallery/BMGallery';

class WorkDrawing extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange(this.props.path);
      this.props.galleryChange("main", "drawing");
    }
    render() {
  
      return (
          <div>
            <h1>{this.props.gallery}</h1>
          </div>
            

      );
    }
  }

  export default WorkDrawing;