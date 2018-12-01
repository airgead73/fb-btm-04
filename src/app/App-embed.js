import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';

//import ScriptTest from '../scripts/ScriptTest.js';

const Home = props => (<h1>Home - {props.path} {document.body.setAttribute("id", "home")}</h1>);
const Work = props => (
  <div>

{document.body.setAttribute("id", "work")}
    <nav>
      <Link to="all">all</Link>{' '}
      <Link to="sculpture">sculpture</Link>{' '}
      <Link to="painting">painting</Link>{' '}
      <Link to="drawing">drawing</Link>
    </nav>
    <Router>
      <WorkHome path="/"/>
      <All path="all"/>
      <Sculpture path="sculpture"/>
      <Painting path="painting"/>
      <Drawing path="drawing"/>
    </Router>
  </div>

);

const WorkHome = props => (<h2>Work - {props.path} {document.body.setAttribute("id", "work")}</h2>);
const All = props => (<h2>all - {props.path} {document.body.setAttribute("id", "all")}</h2>);
const Sculpture = props => (<h2>sculpture -  {props.path} {document.body.setAttribute("id", "sculpture")}</h2>);
const Painting = props => (<h2>painting - {props.path} {document.body.setAttribute("id", "painting")}</h2>);
const Drawing = props => (<h2>drawing - {props.path} {document.body.setAttribute("id", "drawing")}</h2>);

// function About(props) {
//   document.body.setAttribute("id", "about");
//   return <h2>About - {props.path}</h2>;
// }

class About extends Component {
  componentDidMount() {
    document.body.setAttribute("id", "about");
    document.title = "about";
  }
  render() {
    return (
      <div>
        <h2>About - {this.props.path}</h2>
        <p>paragraph</p>
      </div>
    );
  }
}

// const About = props => {
//   document.body.setAttribute("id", "about");
//   return (
//     <div>
//       <h2>About - {props.path}</h2>
//       <p>paragraph</p>
//     </div>
//   );
// };

//const About = props => (<h2>About - {props.path} {document.body.setAttribute("id", "about")}{document.title = "about"}</h2>);
const Contact = props => (<h2>Contact - {props.path} {document.body.setAttribute("id", "contact")}</h2>);
const Terms = props => (<h2>Terms - {props.path} {document.body.setAttribute("id", "terms")}</h2>);
const Credits = props => (<h2>Credits - {props.path} {document.body.setAttribute("id", "credits")}</h2>);

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">home</Link>{' '}
          <Link to="work">work</Link>{' '}
          <Link to="about">about</Link>{' '}
          <Link to="contact">contact</Link>{' '}
          <Link to="terms">terms</Link>{' '}
          <Link to="credits">credits</Link>
        </nav>
        <Router>
          <Home path="/"/>
          <Work path="work/*"/>
          <About path="about"/>
          <Contact path="contact"/>
          <Terms path="terms"/>
        </Router>
      </div>

    );
  }
}

export default App;
