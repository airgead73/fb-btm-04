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
          <Column size="12">

          <h1>{this.props.page}</h1>
            
            <nav className={`workNav_${this.props.page}`} id="workNav">

              <ul>
                <li className="list-item list-all"><NavLink to="all"><span>all</span></NavLink></li>
                <li className="list-item list-sculpture"><NavLink to="sculpture"><span>sculpture</span></NavLink></li>
                <li className="list-item list-painting"><NavLink to="painting"><span>painting</span></NavLink></li>
                <li className="list-item list-drawing"><NavLink to="drawing"><span>drawing</span></NavLink></li>
              </ul>
      
          </nav>

          {showSubNav() && (
            <nav className={`workSubNav_${this.props.page}`} id="workSubNav">
                  <ul>
                    <li className="list-item list-figure"><NavLink to="sculpture/figure"><span>figures</span></NavLink></li>
                    <li className="list-item list-portrait"><NavLink to="sculpture/portrait"><span>portrait</span></NavLink></li>
                    <li className="list-item list-abstract"><NavLink to="sculpture/abstract"><span>abstract</span></NavLink></li>
                    <li className="list-item list-wildlife"><NavLink to="sculpture/wildlife"><span>wildlife</span></NavLink></li>
                </ul>             
            </nav>
          )}



          </Column>
          <Column size="12">
            {this.props.children}
          </Column>
        </Row>          
      
      );
    }
  }

  export default Work;