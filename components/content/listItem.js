import React from "react";
import style from "styled-components";

function ListItem({ children, className, key }) {
  return <li className={className} key={key}>{children}</li>;
}

export default ListItem = style.li`
  margin: 0 0 1.25rem;
`;
