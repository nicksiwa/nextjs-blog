import React from "react";
import style from "styled-components";

function Text({ children, className }) {
  return <div className={className}>{children}</div>;
}

export default Text = style.div`
  font-size: 1rem;

  ${props => props.light && `
    color: #666;
  `}

  ${props => props.sm && `
    font-size: 0.9rem;
  `}
`;
