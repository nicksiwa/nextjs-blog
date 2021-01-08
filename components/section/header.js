import React from "react";
import style from "styled-components";

function Header({ children, className }) {
  return <header className={className}>{children}</header>;
}

export default Header = style.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
