import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';

//import ScriptTest from '../scripts/ScriptTest.js';

import Header from './components/blocks/Header';
import Footer from './components/blocks/Footer';

const Home = props => (<h1>Home - {props.path}</h1>);
const Work = props => (
  <div>
    <h2>Work = {props.path}</h2>
    <nav>
      <Link to="./">Work Home</Link>{' '}
      <Link to="sculpture">Sculpture</Link>{' '}
      <Link to="painting">Painting</Link>
    </nav>
    <Router>
      <WorkHome path="./"/>
      <Sculpture path="sculpture"/>
      <Painting path="painting"/>
    </Router>
  </div>

);

const WorkHome = props => (<h2>Work Home - {props.path}</h2>);
const Sculpture = props => (<h2>sculpture -  {props.path}</h2>);
const Painting = props => (<h2>painting - {props.path}</h2>);

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">home</Link>{' '}
          <Link to="work">work</Link>
        </nav>
        <Router>
          <Home path="/"/>
          <Work path="work/*"/>
        </Router>
      </div>

    );
  }
}

export default App;
