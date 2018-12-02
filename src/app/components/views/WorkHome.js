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
          {this.props.page !=="all" || this.props.page !=="sculpture" ||this.props.page !=="painting" || this.props.page !=="drawing" && (
            <h1>{this.props.title}</h1>
          )}
          
        </div>
      );
    }
  }

  export default WorkHome;