import React, { Component } from 'react';
import { Link } from '@reach/router';
import NavWork from '../Nav/NavWork';

class Work extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      document.body.setAttribute("id", "work");
      document.title = "work";
      this.props.pageChange("work");
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