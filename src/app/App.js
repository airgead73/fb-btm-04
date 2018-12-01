import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Link, Match } from '@reach/router';

// views

import Home from './components/views/Home';
import About from './components/views/About';
import Work from './components/views/Work';
import WorkHome from './components/views/WorkHome';
import All from './components/views/WorkAll';
import Sculpture from './components/views/WorkSculpture';
import Painting from './components/views/WorkPainting';
import Drawing from './components/views/WorkDrawing';
import Contact from './components/views/Contact';
import Terms from './components/views/Terms';
import Credits from './components/views/Credits';

//import ScriptTest from '../scripts/ScriptTest.js';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
        return {
          className: isCurrent ? "active" : null
      };
    }}
  />
);

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className={this.props.page}>
      <NavLink to="/">home</NavLink>{' '}
      <NavLink to="work">work</NavLink>{' '}
      <NavLink to="about">about</NavLink>{' '}
      <NavLink to="contact">contact</NavLink>{' '}
      <NavLink to="terms">terms</NavLink>{' '}
      <NavLink to="credits">credits</NavLink>
    </nav>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "app"
    };
    this.changePage = this.changePage.bind(this);

  }

  changePage(newPage) {
    this.setState({
      page: newPage
    });
  }

  render() {
    return (
      <div>
        <Nav page={this.state.page}/>
        <Router>
          <Home path="/" pageChange={this.changePage}/>
          <Work path="work" page={this.state.page} pageChange={this.changePage}>
            <WorkHome path="/" page={this.state.page} pageChange={this.changePage}/>
            <All path="all" page={this.state.page} pageChange={this.changePage}/>
            <Sculpture path="sculpture" page={this.state.page} pageChange={this.changePage}/>
            <Painting path="painting" page={this.state.page} pageChange={this.changePage}/>
            <Drawing path="drawing" page={this.state.page} pageChange={this.changePage}/>
          </Work>
          <About path="about" pageChange={this.changePage}/>
          <Contact path="contact" pageChange={this.changePage}/>
          <Terms path="terms" pageChange={this.changePage}/>
          <Credits path="credits" pageChange={this.changePage}/>
          
        </Router>
      </div>

    );
  }
}

export default App;
