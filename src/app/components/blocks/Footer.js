import React, { Component } from 'react';
import NavFooter from '../navigation/NavFooter';

class Footer extends Component {
    render() {
        return (
            <footer className={`footer_${this.props.page}`}>
                <NavFooter page={this.props.page}/>                
            </footer>
        );
    }
}

export default Footer;
