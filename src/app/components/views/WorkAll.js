import React, { Component } from 'react';
import BMGallery from '../gallery/BMGallery';

class WorkAll extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange(this.props.path);
      this.props.galleryChange("main", "all");
    }
    render() {
  
      return (

        <BMGallery photos={this.props.gallery} direction={"rows"}/>
            

      );
    }
  }

  export default WorkAll;