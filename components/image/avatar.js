import React from "react";
import style from "styled-components";

function Avatar({ src, alt, className }) {
  return <img src={src} className={className} alt={alt} />;
}

export default Avatar = style.img`
  width: 8rem;
  height: 8rem;
  border-radius: 9999px;
`;
