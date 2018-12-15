import React from 'react';

export default props => {

    return (
     
          <main className={`main_${props.page}`}>{props.children}</main>

    );
}
