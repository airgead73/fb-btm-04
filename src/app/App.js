import React, { Component } from 'react';
import { Router } from '@reach/router';

// nav

import Nav from './components/navigation/Nav';
import NavFooter from './components/navigation/NavFooter';

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
        <Nav page={this.state.page}/>
        <Router>
          <Home path="/" pageChange={this.changePage}/>
          <Work path="work" 
            page={this.state.page} 
            pageChange={this.changePage}
            >
              <WorkHome path="/" 
                page={this.state.page} 
                pageChange={this.changePage}
                />
              <All 
                path="all" 
                page={this.state.page} 
                pageChange={this.changePage}
                />
              <Sculpture 
                path="sculpture" 
                page={this.state.page} 
                pageChange={this.changePage}
                />
              <Painting 
                path="painting" 
                page={this.state.page} 
                pageChange={this.changePage}
                />
              <Drawing 
              path="drawing" 
              page={this.state.page} 
              pageChange={this.changePage}
              />
          </Work>
          <About 
            path="about" 
            pageChange={this.changePage}
            />
          <Contact 
            path="contact" 
            pageChange={this.changePage}
            />
          <Terms 
            path="terms" 
            pageChange={this.changePage}
            />
          <Credits 
            path="credits" 
            pageChange={this.changePage}
            />                  
        </Router>
        <NavFooter page={this.state.page}/> 
        
      </div>

    );
  }
}

export default App;
