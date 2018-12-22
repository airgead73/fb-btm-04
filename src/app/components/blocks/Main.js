import React from 'react';

export default props => {


    const showBTT = () => {
        let currentPage = props.page;

        switch(currentPage) {
          case "home":
          case "work":
          case "contact":
          case "credits":
            return false;
          default: 
            return true;
        }
       
      }    

    return (
     
          <main className={`main_${props.page}`}>
                {props.children}
                {
                    showBTT() && (
                    <a className={`btt_${props.page}`} href="#pageTop" id="bttLink">back to top</a>
                )}
                
            </main>

    );
}
