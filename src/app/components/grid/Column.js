import React from 'react';

export const Column = ({size, offset, children}) => {

  let sizeFragment = size.split(" ").map(size => "col-" + size).join(" ");
  let offsetFragment = offset ? offset.split(" ").map(offset => "offset-" + offset).join(" ") : "";
  let newClassName = offset ? `${sizeFragment} ${offsetFragment}` : `${sizeFragment}`;

  return <div className={newClassName}>{children}</div>;

};
