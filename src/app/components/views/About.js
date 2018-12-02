import React, { Component } from 'react';
import { Row, Column } from '../grid';

class About extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange(this.props.path);
    }
    render() {
  
      return (
        <Row>
          <Column size="12 sm-6">
          <img className="img-fluid" alt="brian" src="https://res.cloudinary.com/dpm/image/upload/v1532885001/bmoneypenny/bio/bm-49.jpg"/>

          </Column>
          <Column size="12 sm-6">
          <h1>{this.props.title}</h1>

            <p>I have been working the world of sculpture since graduating from Lyme
            Academy of Fine Arts in 1997. My day to day work is collaborating with
            professional sculptors to help them produce their work. This site is
            dedicated to my own personal artwork spanning those years since ‘97 in
            varied materials and subjects.</p>
            <p>My training has been in the classical traditions of art with a heavy
            emphasis on the figure. I have also enjoyed creating art of animals;
            studying and learning about them in the making. My work involves a variety
            of materials and methods from bronze to stone to plaster, so discovering
            new ways to create is a large part of the enjoyment I get from my
            work.</p>
            <p>There are pieces in my body of work that are abstract and come from a
            more subconscious  level for me. Since exploring this, I’ve enjoyed
            incorporating abstraction into my more figurative subjects.</p>
            <p>Stone carving is by far my favorite way to work. I believe my best
            results come in that medium, as it tends to force a simplified sculpting
            of form and its translucence adds so much richness in light as well as
            shadow.  </p>
            <p>My methods and subjects will surely evolve as I continue this life of
            making art and craft. To me, that’s the point, to always try new things
            and attempt to master what your passion is.</p>          

          </Column>
        </Row>
      );
    }
  }

  export default About;