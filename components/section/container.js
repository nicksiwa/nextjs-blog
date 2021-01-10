import style from "styled-components";

const Container = style.section`
  max-width: 45rem;
  padding: 0 1rem;
  margin: 1rem auto 6rem;

  ${props => props.nav && `
    margin: 0 auto;
  `}
`;

export default Container;
