import React from 'react';
import NavLink from './NavLink';

export default props => {

    return (
     
          <nav className={`footer_${props.page}`}>
            &copy; 2018 Brian Moneypenny (03) | {' '}
            <NavLink to="terms">terms</NavLink>{' '}
            <NavLink to="credits">credits</NavLink>        
          </nav>

    );
}




  