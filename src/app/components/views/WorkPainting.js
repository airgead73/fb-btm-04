import React, { Component } from 'react';
import BMGallery from '../gallery/BMGallery';

class WorkPainting extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange(this.props.path);
    }
    render() {
  
      return (

        <p>painting page</p> 

      );
    }
  }

  export default WorkPainting;