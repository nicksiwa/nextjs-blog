import React from "react";
import style from "styled-components";

function Container({ children, className }) {
  return <div className={className}>{children}</div>;
}

export default Container = style.section`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;
