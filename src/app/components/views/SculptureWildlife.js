import React, { Component } from 'react';
import BMGallery from '../gallery/BMGallery';
import db from '../../../db/getDB';

class SculptureWildlife extends Component {
  componentDidMount() {
    document.body.setAttribute("id", this.props.id);
    document.title = this.props.title;
    this.props.pageChange(this.props.path);
  }
    render() {
  
      return (

        <BMGallery photos={db(this.props.path)} direction={"rows"}/>

      );
    }
  }
  
  export default SculptureWildlife;