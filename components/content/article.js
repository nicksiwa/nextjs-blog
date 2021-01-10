import style from "styled-components";

const Article = style.article`
  img {
    margin: 1rem 0;

    + span {
      display: block;
      text-align: center;
      font-size: 0.85rem;
    }
  }
`;

export default Article;
