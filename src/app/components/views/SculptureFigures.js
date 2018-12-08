import React, { Component } from 'react';

class SculptureFigures extends Component {
  componentDidMount() {
    document.body.setAttribute("id", this.props.id);
    document.title = this.props.title;
    this.props.pageChange(this.props.path);
    this.props.changeGallery("sculpture");
  }
    render() {
  
      return (

            <h1>Sculpture Figures</h1>

      );
    }
  }
  
  export default SculptureFigures;