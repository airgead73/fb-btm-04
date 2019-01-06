import React from 'react';
import NavLink from './NavLink';
import { Link } from '@reach/router';
import { Container, Row, Column, CustomColumn } from '../grid';

export default props => {
    return (
      <nav className={`nav_${props.page}`}>

        <Container>
          <Row>
            <CustomColumn size="12" id="logo_column">
              <Link className="navbar-brand" to="/"><div className="mainLogo"></div></Link>
            </CustomColumn>
            <Column size="12">
              <ul className="nav flex-column" id="mainNav">
                <li className="nav-item"><NavLink className="nav-link" to="/">work</NavLink>
                    <ul className="nav flex-column" id="workNav">
                    <li className="list-item list-sculpture"><NavLink to="sculpture"><span>sculpture</span></NavLink>
                      <ul className="nav flex-column" id="workSubNav">
                        <li className="list-item list-figure"><NavLink to="figure"><span>figures</span></NavLink></li>
                        <li className="list-item list-portrait"><NavLink to="portrait"><span>portrait</span></NavLink></li>
                        <li className="list-item list-abstract"><NavLink to="abstract"><span>abstract</span></NavLink></li>
                        <li className="list-item list-wildlife"><NavLink to="wildlife"><span>wildlife</span></NavLink></li>
                      </ul>                   
                    </li>
                    <li className="list-item list-painting"><NavLink to="painting"><span>painting</span></NavLink></li>
                    <li className="list-item list-drawing"><NavLink to="drawing"><span>drawing</span></NavLink></li>
                  </ul>                
                </li>
                <li className="nav-item"><NavLink className="nav-link" to="about">about</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="contact">contact</NavLink></li>
              </ul> 

              
                     
            </Column>
          </Row>

      </Container>

    </nav>
    );
  }