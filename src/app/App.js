import React, { Component } from 'react';
import { Router } from '@reach/router';

// grid

import { Container } from './components/grid';

// blocks

import Header from './components/blocks/Header';
import Footer from './components/blocks/Footer';
import Main from './components/blocks/Main';

// main views

import Home from './components/views/Home';
import About from './components/views/About';
import Work from './components/views/Work';
import Contact from './components/views/Contact';
import Terms from './components/views/Terms';
import Credits from './components/views/Credits';

// work views

import WorkHome from './components/views/WorkHome';
import All from './components/views/WorkAll';
import Sculpture from './components/views/WorkSculpture';
import Painting from './components/views/WorkPainting';
import Drawing from './components/views/WorkDrawing';

// sculpture views 

import SculptureHome from './components/views/SculptureHome';
import Abstract from './components/views/SculptureAbstract';
import Figures from './components/views/SculptureFigures';
import Portrait from './components/views/SculpturePortrait';
import Wildlife from './components/views/SculptureWildlife';


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
        <Container>
        <Router>
            <Home 
              path="/" 
              pageChange={this.changePage}
              title="brian moneypenny"             
    
              />
            <Work 
              path="work" 
              page={this.state.page} 
              pageChange={this.changePage}
              title="brian's work"
              >
                <WorkHome 
                  path="/" 
                  page={this.state.page} 
                  pageChange={this.changePage}
                  title="brian's work"
                  />
                <All 
                  path="all" 
                  page={this.state.page} 
                  pageChange={this.changePage}
                  title="brian's work | all"
                  />
                <Sculpture
                  path="sculpture" 
                  page={this.state.page} 
                  pageChange={this.changePage}
                  title="brian's work | sculpture"
                  >
                    <SculptureHome
                      path="/"
                      page={this.state.page}
                      pageChange={this.changePage}
                      title="brian's work | sculpture"               
                    />
                    <Figures
                      path="figure"
                      page={this.state.page}
                      pageChange={this.changePage}
                      title="sculpture | figures"                   
                    />
                    <Portrait
                       path="portrait"
                       page={this.state.page}
                       pageChange={this.changePage}                    
                    />
                    <Wildlife
                      path="wildlife"
                      page={this.state.page}
                      pageChange={this.changePage}
                      title="sculpture | wildlife"                    
                    />
                    <Abstract
                       path="abstract"
                       page={this.state.page}
                       pageChange={this.changePage}
                       title="sculpture | abstract"              
                    />
                  </Sculpture>
                <Painting 
                  path="painting" 
                  page={this.state.page} 
                  pageChange={this.changePage}
                  title="brian's work | painting"
                  />
                <Drawing 
                path="drawing" 
                page={this.state.page} 
                pageChange={this.changePage}
                title="brian's work | drawing"
                />
            </Work>
            <About 
              path="about" 
              pageChange={this.changePage}
              title="about brian"
              />
            <Contact 
              path="contact" 
              pageChange={this.changePage}
              title="contact brian"

              />
            <Terms 
              path="terms" 
              pageChange={this.changePage}
              title="terms and conditions"
              />
            <Credits 
              path="credits" 
              pageChange={this.changePage}
              title="credits"
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
