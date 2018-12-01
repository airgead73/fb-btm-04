import React, { Component } from 'react';
import Main from '../blocks/Main';

import ScriptTest from '../../../scripts/ScriptTest.js';

class Terms extends Component {
  componentDidMount() {
    document.body.setAttribute("id", "bodyTerms");
    document.title = "terms";
    ScriptTest("terms");
  }
  render() {
    return (

      <Main page="Terms">
        <h1>Terms</h1>
      </Main>

    );
  }
}

export default Terms;
