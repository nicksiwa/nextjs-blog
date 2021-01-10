import React from "react";
import style from "styled-components";
import Date from "../date";

function ArticleMeta({ className, date, stats }) {
  return (
    <div className={className}>
      <Date dateString={date} />
      <span>•</span>
      <span>{stats.text}</span>
    </div>
  );
}

const ArticleMetaStyled = style(ArticleMeta)`
  span {
    margin-left: 5px
  }
`;

export default ArticleMetaStyled;
