import React from 'react';
import NavLink from './NavLink';

export default props => {
    return (
     
          <nav className={`worknav_${props.page}`}>
          
          <NavLink to="all">all</NavLink>{' '}
          <NavLink to="sculpture">sculpture</NavLink>{' '}
          <NavLink to="painting">painting</NavLink>{' '}
          <NavLink to="drawing">drawing</NavLink>
          
          </nav>


    );
  }