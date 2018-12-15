import React, { Component } from 'react';
import { Column, Row } from '../grid';

class Home extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange("home");
    }
    render() {
  
      return (
        <Row>
          <Column size="12">
            <h1 className="home_title">{this.props.title}</h1>
          </Column>
        </Row>

      );
    }
  }

  export default Home;