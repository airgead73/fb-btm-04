import React, { Component } from 'react';

class Home extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange(this.props.className);
    }
    render() {
  
      return (
        <div>
          <h2>Home - {this.props.path}</h2>
          <p>02_Blocks Branch</p>
        </div>
      );
    }
  }

  export default Home;