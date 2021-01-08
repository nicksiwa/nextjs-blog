import React from "react";
import style from "styled-components";

function List({ children, className }) {
  return <ul className={className}>{children}</ul>;
}

export default List = style.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
