import React, { Component } from 'react';
import NavFooter from '../navigation/NavFooter';

class Footer extends Component {
    render() {
        return (
            <footer>
                <NavFooter page={this.props.page}/>                
            </footer>
        );
    }
}

export default Footer;
