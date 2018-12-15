import React from 'react';

export const CustomColumn = ({size, id, offset, children}) => {

  let sizeFragment = size.split(" ").map(size => "col-" + size).join(" ");
  let offsetFragment = offset ? offset.split(" ").map(offset => "offset-" + offset).join(" ") : "";
  let newClassName = offset ? `${sizeFragment} ${offsetFragment}` : `${sizeFragment}`;

  return <div className={newClassName} id={id}>{children}</div>;

};
