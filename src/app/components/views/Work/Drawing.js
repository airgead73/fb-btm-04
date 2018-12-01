import React, { Component } from 'react';

import DefinePath from '../../../../scripts/DefinePath';

class Drawing extends Component {

  componentDidMount() {
    document.title = "work | " + DefinePath(this.props.location.pathname);
  }

  render() {
    return (
      <div>
        <h2>drawing contents</h2>
      </div>
    );
  }
}

export default Drawing;
