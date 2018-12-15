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
        </div>
      );
    }
  }

  export default Home;