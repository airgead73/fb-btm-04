import React, { Component } from 'react';
import { CustomColumn, Row } from '../grid';

class Home extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange("home");
    }
    render() {
  
      return (
        <Row>
          <CustomColumn size="12" id="homeLogo">
            <h1 className="home_title">{this.props.title}</h1>
          </CustomColumn>
        </Row>

      );
    }
  }

  export default Home;