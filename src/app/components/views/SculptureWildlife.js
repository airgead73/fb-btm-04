import React, { Component } from 'react';

class SculptureWildlife extends Component {
  componentDidMount() {
    document.body.setAttribute("id", this.props.id);
    document.title = this.props.title;
    this.props.pageChange(this.props.path);
  }
    render() {
  
      return (

            <h1>Sculpture Wildlife</h1>

      );
    }
  }
  
  export default SculptureWildlife;