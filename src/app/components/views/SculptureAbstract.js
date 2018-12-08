import React, { Component } from 'react';


class SculptureAbstract extends Component {
  componentDidMount() {
    document.body.setAttribute("id", this.props.id);
    document.title = this.props.title;
    this.props.pageChange(this.props.path);
    this.props.changeGallery("sculpture");
  }
    render() {
  
      return (

            <h1>Scultpure Abstracts</h1>

      );
    }
  }
  
  export default SculptureAbstract;