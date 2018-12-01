import React, { Component } from 'react';

import ScriptTest from '../../../../scripts/ScriptTest.js';
import DefinePath from '../../../../scripts/DefinePath.js';

class Sculpture extends Component {

  componentDidMount() {
    document.title = "work | " + DefinePath(this.props.location.pathname);
    ScriptTest("sculpture");
  }

  render() {
    return (
      <div>
        <h2>sculpture contents</h2>
      </div>
    );
  }
}

export default Sculpture;
