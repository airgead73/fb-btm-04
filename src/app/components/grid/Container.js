import React from 'react';

export const Container = ({fluid, id, children }) =>

<div className={`container${fluid ? "-fluid": ""}`} id={`container${id ? `-${id}`: ""}`}>
  {children}
</div>;
