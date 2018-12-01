import React, { Component } from 'react';
import NavLink from './NavLink';

export default props => {
    return (
     
          <nav className={`footer_${props.page}`}>
            <NavLink to="terms">terms</NavLink>{' '}
            <NavLink to="credits">credits</NavLink>        
          </nav>

    );
  }