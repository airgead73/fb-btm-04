import React, { Component } from 'react';
import { Link } from '@reach/router';


class Nav extends Component {

  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="work">work</Link></li>
          <li><Link to="about">about</Link></li>
          <li><Link to="contact">contact</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
