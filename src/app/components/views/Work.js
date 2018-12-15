import React, { Component } from 'react';
import NavLink from '../navigation/NavLink';
import { Row, Column } from '../grid';


class Work extends Component {
  changeGallery(newGallery) {

  }
  componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange(this.props.path);
  }
    render() {

      const showSubNav = () => {
        let currentPage = this.props.page;

        switch(currentPage) {
          case "sculpture":
          case "figure":
          case "abstract":
          case "portrait":
          case "wildlife":
            return true;
          default: 
            return false;
        }
       
      }

      return (

        <Row>
          <Column size="12 md-2">

          <h1>{this.props.page}</h1>
            
            <nav className="workNav">

              <ul>
                <li><NavLink to="all">all</NavLink></li>
                <li><NavLink to="sculpture">sculpture</NavLink>
                {showSubNav() && (
                  <ul className="sculptureNav">
                  <li><NavLink to="sculpture/figure">figures</NavLink></li>
                  <li><NavLink to="sculpture/portrait">portrait</NavLink></li>
                  <li><NavLink to="sculpture/abstract">abstract</NavLink></li>
                  <li><NavLink to="sculpture/wildlife">wildlife</NavLink></li>
                </ul> 
                )}
            

                </li>
                <li><NavLink to="painting">painting</NavLink></li>
                <li><NavLink to="drawing">drawing</NavLink></li>
              </ul>
       
          </nav>

          </Column>
          <Column size="12 md-10">
            {this.props.children}
          </Column>
        </Row>          
      
      );
    }
  }

  export default Work;