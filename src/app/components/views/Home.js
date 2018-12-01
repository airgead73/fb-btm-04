import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      document.body.setAttribute("id", "home");
      document.title = "home";
      this.props.pageChange("home");
    }
    render() {
  
      return (
        <div>
          <h2>Home - {this.props.path}</h2>
          <p>paragraph</p>
        </div>
      );
    }
  }

  export default Home;