import React, { Component } from 'react';
import { Column, Row } from '../grid';
import BMGallery from '../gallery/BMGallery';
import models from '../../../db/models';

class WorkSculpture extends Component {
  componentDidMount() {
    document.body.setAttribute("id", this.props.id);
    document.title = this.props.title;
    this.props.pageChange(this.props.path);
  }
    render() {
  
      return (
        <Row>
          <Column size="12 md-2">
            <h1>{this.props.page}</h1>
          </Column>
          <Column size="12 md-10">
            <BMGallery photos={models.getForm('drawing')} direction={"row"}/>
          </Column>
        </Row>
      );
    }
  }
  
  export default WorkSculpture;