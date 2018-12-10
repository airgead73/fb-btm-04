import React, { Component } from 'react';


class WorkSculpture extends Component {
  componentDidMount() {
    document.body.setAttribute("id", this.props.id);
    document.title = this.props.title;
    this.props.pageChange(this.props.path);
    this.props.galleryChange("sub", "sculpture");
  }
    render() {
  
      return (

        <div>
          sculpture | {this.props.gallery}
          {this.props.children}
      </div>          

      );
    }
  }
  
  export default WorkSculpture;