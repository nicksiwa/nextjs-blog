import React from "react";
import style from "styled-components";

function Title({ children, className }) {
  return <h1 className={className}>{children}</h1>;
}

export default Title = style.h1`
  line-height: 1.2;
  letter-spacing: -0.05rem;
  margin: 1rem 0;

  ${props => props.xl && `
    font-size: 2.5rem;
    font-weight: 800;
  `}

  ${props => props.lg && `
    font-size: 2rem;
  `}

  ${props => props.md && `
    font-size: 1.5rem;
  `}
`;
