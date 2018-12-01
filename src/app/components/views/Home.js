import React, { Component } from 'react';
import Main from '../blocks/Main';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.body.setAttribute("id", "bodyHome");
    document.title = "home";
    this.setState({page: "home"});
  }

  render() {
    return (

      <Main page="Home">
        <h1>Home</h1>

      </Main>

    );
  }
}

export default Home;
