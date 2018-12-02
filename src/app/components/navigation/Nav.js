import React from 'react';
import NavLink from './NavLink';

export default props => {
    return (
      <nav className={props.page}>
      <NavLink to="/">home</NavLink>{' '}
      <NavLink to="work">work</NavLink>{' '}
      <NavLink to="about">about</NavLink>{' '}
      <NavLink to="contact">contact</NavLink>{' '}

    </nav>
    );
  }