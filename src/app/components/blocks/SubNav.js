import React, { Component } from 'react';
import { Link } from '@reach/router';

class SubNav extends Component {
  render() {
    return (
      <nav className={this.props.location}>
        <ul>
          <li><Link to="all">all</Link></li>
          <li><Link to="sculpture">sculpture</Link></li>
          <li><Link to="painting">painting</Link></li>
          <li><Link to="drawing">drawing</Link></li>
        </ul>
      </nav>
    );
  }
}

export default SubNav;
