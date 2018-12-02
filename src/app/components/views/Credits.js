import React from 'react';

class Credits extends React.Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange(this.props.path);
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