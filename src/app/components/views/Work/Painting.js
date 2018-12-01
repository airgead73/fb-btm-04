import React, { Component } from 'react';

import DefinePath from '../../../../scripts/DefinePath';


class Painting extends Component {

  componentDidMount() {
    document.title = "work | " + DefinePath(this.props.location.pathname);
  }

  render() {
    return (
      <div>
        <h2>painting contents</h2>
      </div>
    );
  }
}

export default Painting;
