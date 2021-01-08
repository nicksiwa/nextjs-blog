import React from "react";
import style from "styled-components";

function Footer({ children, className }) {
  return <footer className={className}>{children}</footer>;
}

export default Footer = style.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  min-height: 150px;
  background: #f9f9f9;
  border-top: 1px solid #ddd;
`;
