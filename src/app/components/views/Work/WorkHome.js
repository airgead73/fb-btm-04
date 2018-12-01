import React, { Component } from 'react';
import { Router } from '@reach/router';

import DefinePath from '../../../../scripts/DefinePath';

import Main from '../../blocks/Main';
import SubNav from '../../blocks/SubNav';

import All from './All';
import Sculpture from './Sculpture';
import Drawing from './Drawing';
import Painting from './Painting';

class WorkHome extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.body.setAttribute("id", "bodyWork");
    //document.title = DefinePath(this.props.location.pathname);
    //console.log(DefinePath(this.props.location.pathname));
  }
  render() {

    return (
     <Main page="Work">
                <h1>Work</h1>

      </Main>

    );
  }
}

export default WorkHome;
