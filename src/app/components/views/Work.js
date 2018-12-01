import React, { Component } from 'react';
import { Link } from '@reach/router';

const NavLink = props => (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
          return {
            className: isCurrent ? "active" : null
        };
      }}
    />
  );

class Work extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      document.body.setAttribute("id", "work");
      document.title = "work";
      this.props.pageChange("work");
      //this.props.change();
    }
    render() {
  
      return (
        <div>
          <h2>Work - {this.props.path}</h2>
          <nav className={this.props.page}>
          
          <NavLink to="all">all</NavLink>{' '}
          <NavLink to="sculpture">sculpture</NavLink>{' '}
          <NavLink to="painting">painting</NavLink>{' '}
          <NavLink to="drawing">drawing</NavLink>
          </nav>
          {this.props.children}
        </div>
      );
    }
  }

  export default Work;