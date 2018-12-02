import React, { Component } from 'react';
import Nav from '../navigation/Nav';

class Header extends Component {
    render() {
        return (
            <header>
                <Nav page={this.props.page}/>
                <h1>Brian's Site</h1>
            </header>
        );
    }
}

export default Header;
