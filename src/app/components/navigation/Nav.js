import React from 'react';
import NavLink from './NavLink';
import { Link } from '@reach/router';
import { Container, Row, Column } from '../grid';

export default props => {
    return (
      <nav className={props.page}>

        <Container>
          <Row>
            <Column size="12 sm-6">
              <Link className="navbar-brand" to="/">Brian's site</Link>
            </Column>
            <Column size="12 sm-6">
              <ul className="nav justify-content-center">
                <li className="nav-item"><NavLink className="nav-link" to="work">work</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="about">about</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="contact">contact</NavLink></li>
              </ul>        
            </Column>
          </Row>

      </Container>

    </nav>
    );
  }