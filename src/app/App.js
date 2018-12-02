import React, { Component } from 'react';
import { Router } from '@reach/router';

// nav

//import Nav from './components/navigation/Nav';
//import NavFooter from './components/navigation/NavFooter';
import Header from './components/blocks/Header';
import Footer from './components/blocks/Footer';
import Main from './components/blocks/Main';

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
        
        <Header page={this.state.page}/>
        <Main page={this.state.page}>
        <Router>
          <Home 
            path="/" 
            pageChange={this.changePage}
            title="home"
            id="bodyHome"
            className="home"
            />
          <Work 
            path="work" 
            page={this.state.page} 
            pageChange={this.changePage}
            title="work"
            id="bodyWork"
            className="work"
            >
              <WorkHome path="/" 
                page={this.state.page} 
                pageChange={this.changePage}
                title="work"
                id="bodyWorkHome"
                className="workHome"
                />
              <All 
                path="all" 
                page={this.state.page} 
                pageChange={this.changePage}
                title="work | all"
                id="bodyWorkAll"
                className="workAll"
                />
              <Sculpture 
                path="sculpture" 
                page={this.state.page} 
                pageChange={this.changePage}
                title="work | sculpture"
                id="bodyWorkSculpture"
                className="workSculpture"
                />
              <Painting 
                path="painting" 
                page={this.state.page} 
                pageChange={this.changePage}
                title="work | painting"
                id="bodyWorkPainting"
                className="workPainting"
                />
              <Drawing 
              path="drawing" 
              page={this.state.page} 
              pageChange={this.changePage}
              title="work | drawing"
              id="bodyWorkDrawing"
              className="workDrawing"
              />
          </Work>
          <About 
            path="about" 
            pageChange={this.changePage}
            title="about"
            id="bodyAbout"
            className="about"
            />
          <Contact 
            path="contact" 
            pageChange={this.changePage}
            title="contact"
            id="bodyContact"
            className="contact"
            />
          <Terms 
            path="terms" 
            pageChange={this.changePage}
            title="terms"
            id="bodyTerms"
            />
          <Credits 
            path="credits" 
            pageChange={this.changePage}
            title="credits"
            id="bodyCredits"
            />                  
        </Router>
        </Main>
        <Footer page={this.state.page}/> 
        
      </div>

    );
  }
}

export default App;
