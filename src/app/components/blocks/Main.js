import React from 'react';

const Main = ({ page, children }) =>

<main id={`main${page}`}>
  {children}
</main>;

export default Main;
