import React, { Component } from 'react';

class WorkHome extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange(this.props.className);
    }
    render() {
  
      return (
        <div>
          <h2>WorkHome - {this.props.path}</h2>
        </div>
      );
    }
  }

  export default WorkHome;