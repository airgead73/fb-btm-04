import React, { Component } from 'react';
import Nav from '../navigation/Nav';

class Header extends Component {
    render() {
        return (
            <header id="pageTop">
                <Nav page={this.props.page}/>
            </header>
        );
    }
}

export default Header;
