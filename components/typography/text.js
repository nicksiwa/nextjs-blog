import style from "styled-components";

const Text = style.div`
  font-size: 1rem;

  pre {
    font-size: 0.85rem;
    border-radius: 5px;
  }

  ${props => props.light && `
    color: #666;
  `}

  ${props => props.sm && `
    font-size: 0.9rem;
  `}

  ${props => props.readContent && `
    font-weight: 300;
    line-height: 2;

    pre {
      line-height: 1.3;
    }
  `}
`;

export default Text;
