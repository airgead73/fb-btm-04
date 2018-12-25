import React, { Component } from 'react';
import { Router } from '@reach/router';

// grid

import { Container, CustomRow, CustomColumn } from './components/grid';

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
      page: "landing"
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
      <Container>
        <CustomRow id="primaryRow">
          <CustomColumn size="12" id="columnLeft">
            <Header page={this.state.page}/>
            
          </CustomColumn>
          <CustomColumn size="12" id="columnRight">
          <Main page={this.state.page}>        
            <Router>
                <Home 
                  path="/" 
                  page={this.state.page}
                  pageChange={this.changePage}
                  title="brian moneypenny" 
                  id="pageHome"          
        
                  />
                <Work 
                  path="work" 
                  page={this.state.page} 
                  pageChange={this.changePage}
                  title="brian's work"
                  id="pageWork"
                  >
                    <WorkHome 
                      path="/" 
                      page={this.state.page} 
                      pageChange={this.changePage}
                      title="brian's work"
                      id="pageWork"
                      />
                    <Sculpture
                      path="sculpture" 
                      page={this.state.page} 
                      pageChange={this.changePage}
                      title="brian's work | sculpture"
                      id="pageSculpture"
                      >
                        <SculptureHome
                          path="/"
                          page={this.state.page}
                          pageChange={this.changePage}
                          title="brian's work | sculpture"
                          id="pageSculpture"               
                        />
                        <Figures
                          path="figure"
                          page={this.state.page}
                          pageChange={this.changePage}
                          title="sculpture | figures" 
                          id="pageFigures"                  
                        />
                        <Portrait
                          path="portrait"
                          page={this.state.page}
                          pageChange={this.changePage} 
                          id="pagePortrait"                   
                        />
                        <Wildlife
                          path="wildlife"
                          page={this.state.page}
                          pageChange={this.changePage}
                          title="sculpture | wildlife" 
                          id="pageWildlife"                   
                        />
                        <Abstract
                          path="abstract"
                          page={this.state.page}
                          pageChange={this.changePage}
                          title="sculpture | abstract" 
                          id="pageAbstract"             
                        />
                      </Sculpture>
                    <Painting 
                      path="painting" 
                      page={this.state.page} 
                      pageChange={this.changePage}
                      title="brian's work | painting"
                      id="pagePainting"
                      />
                    <Drawing 
                    path="drawing" 
                    page={this.state.page} 
                    pageChange={this.changePage}
                    title="brian's work | drawing"
                    id="pageDrawing"
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
                  id="pageContact"

                  />
                <Terms 
                  path="terms" 
                  pageChange={this.changePage}
                  title="terms and conditions"
                  id="pageTerms"
                  />
                <Credits 
                  path="credits" 
                  pageChange={this.changePage}
                  title="credits"
                  id="pageCredits"
                  />                  
              </Router>

            </Main>          
          </CustomColumn>          
        </CustomRow>
        <Footer page={this.state.page}/> 
      </Container>
    );
  }
}

export default App;
