import React, { Component } from 'react';

class Home extends Component {
    componentDidMount() {
      document.body.setAttribute("id", "home");
      document.title = "home";
      this.props.pageChange("home");
    }
    render() {
  
      return (
        <div>
          <h2>Home - {this.props.path}</h2>
          <p>master branch</p>
        </div>
      );
    }
  }

  export default Home;