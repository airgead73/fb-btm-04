import React from 'react';

class Credits extends React.Component {
    componentDidMount() {
      document.body.setAttribute("id", "credits");
      document.title = "credits";
      this.props.pageChange("credits");
    }
    render() {
  
      return (
        <div>
          <h2>Credits - {this.props.path}</h2>
          <p>paragraph</p>
        </div>
      );
    }
  }

  export default Credits;