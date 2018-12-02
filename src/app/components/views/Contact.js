import React, { Component } from 'react';
import { Row, Column } from '../grid';

class Contact extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange(this.props.path);
    }
    render() {
  
      return (
        <Row>
          <Column size="12 sm-6">
          <img className="img-fluid" alt="brian" src="https://res.cloudinary.com/dpm/image/upload/v1532885001/bmoneypenny/work/bm-45.jpg"/>

          </Column>
          <Column size="12 sm-6">
          <h1>{this.props.title}</h1>

            <p>Seaside, CA</p>

       

          </Column>
        </Row>
      );
    }
  }

  export default Contact;