import React from "react";
import style from "styled-components";
import { Container } from ".";
import { Title } from "../typography";

function Navbar({ className }) {
  return (
    <nav className={className}>
      <Container nav>
        <Title>My Blog</Title>
      </Container>
    </nav>
  );
}

const NavbarStyled = style(Navbar)`
  display: flex;
  align-items: center;
  min-height: 80px;
  border-bottom: 2px solid #ddd;
`;

export default NavbarStyled;
