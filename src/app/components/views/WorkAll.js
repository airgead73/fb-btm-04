import React, { Component } from 'react';
import Gallery from 

class WorkAll extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange(this.props.path);
      this.props.galleryChange("main", "all");
    }
    render() {
  
      return (

            <h1>Work All | {this.props.gallery}</h1>

      );
    }
  }

  export default WorkAll;