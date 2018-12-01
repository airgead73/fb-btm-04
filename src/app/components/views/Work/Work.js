import React, { Component } from 'react';
import { Router } from '@reach/router';

import DefinePath from '../../../../scripts/DefinePath';

import Main from '../../blocks/Main';
import SubNav from '../../blocks/SubNav';

import All from './All';
import Sculpture from './Sculpture';
import Drawing from './Drawing';
import Painting from './Painting';

class Work extends Component {
  componentDidMount() {
    document.body.setAttribute("id", "bodyWork");
    //document.title = DefinePath(this.props.location.pathname);
    //console.log(DefinePath(this.props.location.pathname));
  }
  render() {

    return (
     <Main page="Work">
                <h1>Work</h1>
                {this.props.path}

        <SubNav/>
        <Router primary="false">
          <All path="all"/>
          <Sculpture path="sculpture"/>
          <Drawing path="drawing"/>
          <Painting path="painting"/>
        </Router>
      </Main>

    );
  }
}

export default Work;
