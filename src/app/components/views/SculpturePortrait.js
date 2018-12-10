import React, { Component } from 'react';

class SculpturePortrait extends Component {
  componentDidMount() {
    document.body.setAttribute("id", this.props.id);
    document.title = this.props.title;
    this.props.pageChange(this.props.path);
  }
    render() {
  
      return (

            
<h1>Sculpture Portrait</h1>
      );
    }
  }
  
  export default SculpturePortrait;