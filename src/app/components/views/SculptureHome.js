import React, { Component } from 'react';

class SculptureHome extends Component {
  componentDidMount() {
    document.body.setAttribute("id", this.props.id);
    document.title = this.props.title;
    this.props.pageChange(this.props.path);
  }
    render() {
  
      return (
      
        <div>
          
          {this.props.children}
          </div>
        
           

      );
    }
  }
  
  export default SculptureHome;