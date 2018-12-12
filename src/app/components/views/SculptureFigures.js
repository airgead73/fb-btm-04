import React, { Component } from 'react';
import BMGallery from '../gallery/BMGallery';

class SculptureFigures extends Component {
  componentDidMount() {
    document.body.setAttribute("id", this.props.id);
    document.title = this.props.title;
    this.props.pageChange(this.props.path);
    this.props.galleryChange("sub", "Figures");
  }
    render() {
  
      return (
        <div>
           <BMGallery photos={this.props.gallery} direction={"rows"}/>
        </div>
           
            

      );
    }
  }
  
  export default SculptureFigures;