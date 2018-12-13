import React, { Component } from 'react';

class SculptureHome extends Component {
  componentDidMount() {
    document.body.setAttribute("id", this.props.id);
    document.title = this.props.title;
    this.props.pageChange("sculpture");
  }
    render() {
  
      return (
      
        
         <div>
           <p>------------</p>
            {this.props.children}
         </div> 
          
          
      
        
           

      );
    }
  }
  
  export default SculptureHome;