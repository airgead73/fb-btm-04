import React, { Component } from 'react';
import { Link } from '@reach/router';


class FooterNav extends Component {

  render() {
    return (
      <nav>
        <ul>
          <li><Link to="terms">terms</Link></li>
          <li><Link to="credits">credits</Link></li>
        </ul>
      </nav>
    );
  }
}

export default FooterNav;
