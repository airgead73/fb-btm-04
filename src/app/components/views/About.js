import React, { Component } from 'react';
import Main from '../blocks/Main';

class About extends Component {
  componentDidMount() {
    document.body.setAttribute("id", "bodyAbout");
    document.title = this.props.message;
  }
  render() {
    return (

      <Main page="About">
          <h1>About</h1>
          {this.props.message}
      </Main>

    );
  }
}

export default About;
