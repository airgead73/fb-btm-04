import React, { Component } from 'react';

class Home extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange("home");
    }
    render() {
  
      return (
        <div>
          <h2>{this.props.title}</h2>
          <p>03_versionA Branch</p>
        </div>
      );
    }
  }

  export default Home;