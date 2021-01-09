import style from "styled-components";

const Content = style.section`
  ${props => props.md && `
    font-size: 1.2rem;
    line-height: 1.5;
  `}
`;

export default Content;
