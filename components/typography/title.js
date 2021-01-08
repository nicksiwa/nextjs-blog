import React from "react";
import style from "styled-components";

function Title({ children, className }) {
  return <h1 className={className}>{children}</h1>;
}

export default Title = style.h1`
  ${props => props.xxl &&  `
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  `}

  ${props => props.xl && `
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  `}

  ${props => props.lg && `
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 1rem 0;
  `}

  ${props => props.md && `
    font-size: 1.2rem;
    line-height: 1.5;
  `}
`;
