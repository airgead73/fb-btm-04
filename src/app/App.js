import React, { Component } from 'react';
import { Router } from '@reach/router';
import BMGallery from './components/gallery/BMGallery';
import db from '../db/getDB';

// grid

import { Container, CustomRow, CustomColumn } from './components/grid';

// blocks

import Header from './components/blocks/Header';
import Footer from './components/blocks/Footer';
import Main from './components/blocks/Main';

// main views

import Home from './components/views/Home';
import About from './components/views/About';



//import Work from './components/views/Work';
import Contact from './components/views/Contact';
import Terms from './components/views/Terms';
import Credits from './components/views/Credits';

// work views

//import Sculpture from './components/views/WorkSculpture';
//import Painting from './components/views/WorkPainting';
//import Drawing from './components/views/WorkDrawing';

// sculpture views 

//import Abstract from './components/views/SculptureAbstract';
//import Figures from './components/views/SculptureFigures';
//import Portrait from './components/views/SculpturePortrait';
//import Wildlife from './components/views/SculptureWildlife';

const Work = (props) => {
  document.body.setAttribute("id", props.id);
  document.title = props.title;
  return (
    <BMGallery photos={db("all")} direction={"rows"}/>
  );
}

const Sculpture = (props) => {
  document.body.setAttribute("id", props.id);
  document.title = props.title;
  return (
    <BMGallery photos={db("sculpture")} direction={"rows"}/>
  );
}

const Painting = (props) => {
  document.body.setAttribute("id", props.id);
  document.title = props.title;
  return (
    <BMGallery photos={db("painting")} direction={"rows"}/>
  );
}

const Drawing = (props) => {
  document.body.setAttribute("id", props.id);
  document.title = props.title;
  return (
    <BMGallery photos={db("drawing")} direction={"rows"}/>
  );
}

const Figures = (props) => {
  document.body.setAttribute("id", props.id);
  document.title = props.title;
  return (
    <BMGallery photos={db("figure")} direction={"rows"}/>
  );
}

const Abstract = (props) => {
  document.body.setAttribute("id", props.id);
  document.title = props.title;
  return (
    <BMGallery photos={db("abstract")} direction={"rows"}/>
  );
}

const Portrait = (props) => {
  document.body.setAttribute("id", props.id);
  document.title = props.title;
  return (
    <BMGallery photos={db("portrait")} direction={"rows"}/>
  );
}

const Wildlife = (props) => {
  document.body.setAttribute("id", props.id);
  document.title = props.title;
  return (
    <BMGallery photos={db("wildlife")} direction={"rows"}/>
  );
}


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
          <CustomColumn size="12 sm-3" id="columnLeft">
            <Header page={this.state.page}/>            
          </CustomColumn>
          <CustomColumn size="12 sm-9" id="columnRight">
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
                  />
                <Sculpture
                  path="sculpture" 
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
