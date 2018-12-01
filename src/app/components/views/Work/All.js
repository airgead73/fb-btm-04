import React, { Component } from 'react';
//import SubNav from '../../blocks/SubNav';
import DefinePath from '../../../../scripts/DefinePath';

class All extends Component {

  componentDidMount() {
    document.title = "work | " + DefinePath(this.props.location.pathname);
  }

  render() {
    return (
      <div>

        <h2>all contents</h2>
        {this.props.pathname}

      </div>
    );
  }
}

export default All;
