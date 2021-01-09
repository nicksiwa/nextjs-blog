import style from "styled-components";

const Anchor = style.a`
  ${props => props.inherit && `color: inherit;`}
`;

export default Anchor;
