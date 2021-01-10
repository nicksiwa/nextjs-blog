import style from "styled-components";

const Article = style.article`
  img {
    margin: auto;

    + span {
      display: block;
      text-align: center;
      font-size: 0.85rem;
    }
  }
`;

export default Article;
