import style from "styled-components";

const Avatar = style.img`
  width: 8rem;
  height: 8rem;
  border-radius: 9999px;

  ${props => props.sm && `
    width: 2rem;
    height: 2rem;
  `}
`;

export default Avatar;
