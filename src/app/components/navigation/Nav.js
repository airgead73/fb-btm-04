import React from 'react';
import NavLink from './NavLink';
import { Link } from '@reach/router';
import { Container, Row, Column, CustomColumn } from '../grid';

export default props => {
    return (
      <nav className={`nav_${props.page}`}>

        <Container>
          <Row>
            <CustomColumn size="12 sm-6" id="logo_column">
              <Link className="navbar-brand" to="/">Brian's Site</Link>
            </CustomColumn>
            <Column size="12 sm-6">
              <ul className="nav" id="mainNav">
                <li className="nav-item"><NavLink className="nav-link" to="work">work</NavLink>
                    <ul className="nav" id="workNav">
                    <li className="list-item list-sculpture"><NavLink to="sculpture"><span>sculpture</span></NavLink>
                      <ul className="nav" id="workSubNav">
                        <li className="list-item list-figure"><NavLink to="sculpture/figure"><span>figures</span></NavLink></li>
                        <li className="list-item list-portrait"><NavLink to="sculpture/portrait"><span>portrait</span></NavLink></li>
                        <li className="list-item list-abstract"><NavLink to="sculpture/abstract"><span>abstract</span></NavLink></li>
                        <li className="list-item list-wildlife"><NavLink to="sculpture/wildlife"><span>wildlife</span></NavLink></li>
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