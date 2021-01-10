import React from "react";
import style from "styled-components";

function Tags({ className, tags }) {
  return (
    <div className={className}>
      {tags.map((tag) => (
        <span>{`#${tag}`}</span>
      ))}
    </div>
  );
}

const TagsStyled = style(Tags)`
  display: flex;

  > span {
    font-size: 0.8rem;
    padding: 5px;
    background: #ddd;
    border-radius: 5px;
    margin-right: 5px;
    line-height: 1;
  }
`;

export default TagsStyled;
