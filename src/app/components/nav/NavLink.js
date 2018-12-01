import React, { Component } from 'react';
import { Link } from '@reach/router';


export default props => {
    return (
        <Link
        {...props}
        getProps={({ isCurrent }) => {
            return {
              className: isCurrent ? "active" : null
          };
        }}
      />
    );
}