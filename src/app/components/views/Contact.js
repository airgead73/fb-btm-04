import React, { Component } from 'react';
import Main from '../blocks/Main';

import ScriptTest from '../../../scripts/ScriptTest.js';

class Contact extends Component {
  componentDidMount() {
    document.body.setAttribute("id", "bodyContact");
    document.title = "contact";
    ScriptTest("contact");
  }
  render() {
    return (

      <Main page="Contact">
        <h1>Contact</h1>
      </Main>

    );
  }
}

export default Contact;
