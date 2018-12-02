import React from 'react';
import { Link } from '@reach/router';


export default props => {
    return (
        <Link
        {...props}
        getProps={({ isCurrent }) => {
            return {
              id: isCurrent ? "currentLink" : null
          };
        }}
      />
    );
}