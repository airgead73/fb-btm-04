import React, { Component } from 'react';
import { Column, Row } from '../grid';
import BMGallery from '../gallery/BMGallery';
import models from '../../../db/models';

class WorkSculpture extends Component {
  componentDidMount() {
    document.body.setAttribute("id", this.props.id);
    document.title = this.props.title;
    this.props.pageChange(this.props.path);
    this.props.changeGallery("sculpture");
  }
    render() {
  
      return (

            <BMGallery photos={this.props.gallery} direction={"row"}/>

      );
    }
  }
  
  export default WorkSculpture;