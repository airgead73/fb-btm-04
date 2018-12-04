import React, { Component } from 'react';
import { Router } from '@reach/router';

// database

import db from '../db/getDB';

// grid

import { Container } from './components/grid';

// blocks

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
      page: "app",
      gallery: db("all")
    };
    this.changePage = this.changePage.bind(this);
    this.changeGallery = this.changeGallery.bind(this); 
  }

  changePage(newPage) {
    this.setState({
      page: newPage
    });
  }

  changeGallery(newGallery) {
    this.setState({
      gallery: db(newGallery)
    });
  }
   
  render() {
    return (
      <div>
        
        <Header page={this.state.page}/>
        <Main page={this.state.page}>
        <Container>
        <Router>
            <Home 
              path="/" 
              pageChange={this.changePage}
              title="brian moneypenny"
              id="bodyHome"
              className="home"
              />
            <Work 
              path="work" 
              page={this.state.page} 
              pageChange={this.changePage}
              title="brian's work"
              id="bodyWork"
              className="work"
              changeGallery={this.changeGallery}
              >
                <WorkHome path="/" 
                  page={this.state.page} 
                  pageChange={this.changePage}
                  title="brian's work"
                  id="bodyWorkHome"
                  className="work"
                  />
                <All 
                  path="all" 
                  page={this.state.page} 
                  pageChange={this.changePage}
                  title="brian's work | all"
                  id="bodyWorkAll"
                  className="workAll"
                  gallery={this.state.gallery}
                  changeGallery={this.changeGallery}
                  />
                <Sculpture 
                  path="sculpture" 
                  page={this.state.page} 
                  pageChange={this.changePage}
                  title="brian's work | sculpture"
                  id="bodyWorkSculpture"
                  className="WorkSculpture"
                  gallery={this.state.gallery}
                  changeGallery={this.changeGallery}
                  />
                <Painting 
                  path="painting" 
                  page={this.state.page} 
                  pageChange={this.changePagechange}
                  title="brian's work | painting"
                  id="bodyWorkPainting"
                  className="workPainting"
                  gallery={this.state.gallery}
                  changeGallery={this.changeGallery}
                  />
                <Drawing 
                path="drawing" 
                page={this.state.page} 
                pageChange={this.changePage}
                title="brian's work | drawing"
                id="bodyWorkDrawing"
                className="workDrawing"
                gallery={this.state.gallery}
                changeGallery={this.changeGallery}
                />
            </Work>
            <About 
              path="about" 
              pageChange={this.changePage}
              title="about brian"
              id="bodyAbout"
              className="about"
              />
            <Contact 
              path="contact" 
              pageChange={this.changePage}
              title="contact brian"
              id="bodyContact"
              className="contact"
              />
            <Terms 
              path="terms" 
              pageChange={this.changePage}
              title="terms and conditions"
              id="bodyTerms"
              />
            <Credits 
              path="credits" 
              pageChange={this.changePage}
              title="credits"
              id="bodyCredits"
              />                  
          </Router>
        </Container>

        </Main>
        <Footer page={this.state.page}/> 
        
      </div>

    );
  }
}

export default App;
