import React, { Component } from 'react';
import NavWork from '../navigation/NavWork';

class Work extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange(this.props.path);
    }
    render() {
  
      return (
        <div>
          <h2>Work - {this.props.path}</h2>
          <NavWork page={this.props.page}/>
          {this.props.children}
        </div>
      );
    }
  }

  export default Work;