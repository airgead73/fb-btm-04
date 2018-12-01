import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Link, Match } from '@reach/router';

//import ScriptTest from '../scripts/ScriptTest.js';

// const Home = props => (
//   <div>
//       <h1>Home - {document.body.setAttribute("id", "home")}</h1>
//   </div>

// );

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
        return {
          class: isCurrent ? "active" : null
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

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.body.setAttribute("id", "home");
    document.title = "home";
    this.props.pageChange("home");
    //this.props.change();
  }
  render() {

    return (
      <div>
        <h2>Home - {this.props.path}</h2>
        <p>paragraph</p>
      </div>
    );
  }
}

class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.body.setAttribute("id", "about");
    document.title = "about";
    this.props.pageChange("about");
    //this.props.change();
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

class Work extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.body.setAttribute("id", "work");
    document.title = "work";
    this.props.pageChange("work");
    //this.props.change();
  }
  render() {

    return (
      <div>
        <h2>Work - {this.props.path}</h2>
        <nav className={this.props.page}>
        <NavLink to="work/">work</NavLink>{' '}
        <NavLink to="all">all</NavLink>{' '}
        <NavLink to="sculpture">sculpture</NavLink>{' '}
        <NavLink to="painting">painting</NavLink>{' '}
        <NavLink to="drawing">drawing</NavLink>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

class All extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.body.setAttribute("id", "all");
    document.title = "all";
    this.props.pageChange("work_all");
    //this.props.change();
  }
  render() {

    return (
      <div>
      <h2>All - page prop value is {this.props.page}</h2>
      </div>
    );
  }
}

class Sculpture extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.body.setAttribute("id", "sculpture");
    document.title = "sculpture";
    this.props.pageChange("work_sculpture");
    //this.props.change();
  }
  render() {

    return (
      <div>
      <h2>All - page prop value is {this.props.page}</h2>
      </div>
    );
  }
}

const WorkHome = props => (<h2>Work - {props.path} {document.body.setAttribute("id", "work")}</h2>);
//const All = props => (<h2>all - {props.path} {document.body.setAttribute("id", "all")}</h2>);
//const Sculpture = props => (<h2>sculpture - {props.path} {document.body.setAttribute("id", "sculpture")}</h2>);
const Painting = props => (<h2>painting - {props.path} {document.body.setAttribute("id", "painting")}</h2>);
const Drawing = props => (<h2>drawing - {props.path} {document.body.setAttribute("id", "drawing")}</h2>);

const Contact = props => (<h2>Contact - {props.path}{document.body.setAttribute("id", "contact")}</h2>);
const Terms = props => (<h2>Terms - {props.path} {document.body.setAttribute("id", "terms")}</h2>);
const Credits = props => (<h2>Credits - {props.path} {document.body.setAttribute("id", "credits")}</h2>);

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
            <WorkHome path="/"/>
            <All path="all" page={this.state.page} pageChange={this.changePage}/>
            <Sculpture path="sculpture" page={this.state.page} pageChange={this.changePage}/>
            <Painting path="painting" page={this.state.page} pageChange={this.changePage}/>
            <Drawing path="drawing" page={this.state.page} pageChange={this.changePage}/>
          </Work>
          <About path="about" pageChange={this.changePage}/>
          <Contact path="contact" pageChange={this.changePage}/>
          <Terms path="terms" pageChange={this.changePage}/>
          
        </Router>
      </div>

    );
  }
}

export default App;
