import React, { Component } from 'react';
import Main from '../blocks/Main';

import ScriptTest from '../../../scripts/ScriptTest.js';

class Credits extends Component {
  componentDidMount() {
    document.body.setAttribute("id", "bodyCredits");
    document.title = "credits";
    ScriptTest("credits");
  }
  render() {
    return (

      <Main page="Credits">
        <h1>Credits</h1>
      </Main>

    );
  }
}

export default Credits;
