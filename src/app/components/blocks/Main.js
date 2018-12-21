import React from 'react';

export default props => {

    return (
     
          <main className={`main_${props.page}`}>
                {props.children}
                {
                    (props.page !== "home" && props.page !== "work" )&& (
                    <a className={`btt_${props.page}`} href="#pageTop">back to top</a>
                )}
                
            </main>

    );
}
