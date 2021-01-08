import React from "react";
import style from "styled-components";

function Anchor({ children, className }) {
  return <a className={className}>{children}</a>;
}

export default Anchor = style.a`
  ${props => props.inherit && `color: inherit;`}
`;
