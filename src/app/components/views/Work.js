import React, { Component } from 'react';
import NavLink from '../navigation/NavLink';
import { Row, Column } from '../grid';

class Work extends Component {

  componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange(this.props.path);
  
  }
    render() {
  
      return (
        <div>

        <Row>
          <Column size="12 md-2">
            <h1>{this.props.path}</h1>
            <nav className={`worknav_${this.props.page}`}>
          
              <NavLink to="all">all</NavLink><br/>
              <NavLink to="sculpture">sculpture</NavLink><br/> 
                  <NavLink to="sculpture/figures">figures</NavLink><br/>
                  <NavLink to="sculpture/portrait">portrait</NavLink><br/>      
                  <NavLink to="sculpture/abstract">abstract</NavLink><br/>
                  <NavLink to="sculpture/wildlife">wildlife</NavLink><br/>                    
              <NavLink to="painting">painting</NavLink><br/>
              <NavLink to="drawing">drawing</NavLink>
          
          </nav>
          </Column>
          <Column size="12 md-10">
            {this.props.children}
          </Column>
        </Row>          
       
        </div>
      );
    }
  }

  export default Work;