import React from "react";
import style from "styled-components";

function Content({ children, className }) {
  return <section className={className}>{children}</section>;
}

export default Content = style.section`
  ${props => props.md && `
    font-size: 1.2rem;
    line-height: 1.5;
  `}
`;
