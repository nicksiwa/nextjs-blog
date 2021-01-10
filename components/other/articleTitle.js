import style from "styled-components";
import { device } from '../../constants/breakpoint'

const ArticleTitle = style.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 10px;

  @media ${device.tablet} {
    align-items: center;
    flex-direction: row;
  }
`;

export default ArticleTitle;
