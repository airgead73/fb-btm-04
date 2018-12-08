import React, { Component } from 'react';

class SculptureHome extends Component {
  componentDidMount() {
    document.body.setAttribute("id", this.props.id);
    document.title = this.props.title;
    this.props.pageChange(this.props.path);
    this.props.changeGallery("sculpture");
  }
    render() {
  
      return (

            <h1>Sculpture Home</h1>

      );
    }
  }
  
  export default SculptureHome;