import React from 'react';

export const CustomRow = ({ fluid, id, children }) =>
<div className={`row${fluid ? '-fluid' : ''}`} id={id}>
  {children}
</div>
;
