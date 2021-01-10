import React from 'react'
import style from "styled-components";

function Footer({ className }) {
  return (
    <footer className={className}>
      <p>Build with ❤️ by Siwa Khongsuphap</p>
    </footer>
  );
}

const FooterStyled = style(Footer)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  min-height: 150px;
  background: #f9f9f9;
  border-top: 1px solid #ddd;
`;

export default FooterStyled;
