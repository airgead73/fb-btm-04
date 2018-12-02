import React from 'react';

export const Container = ({fluid, id, children, props }) =>

<div className={`container${fluid ? "-fluid": ""}`} id={`container${id ? `-${id}`: ""}`}>
  {children}
</div>;
