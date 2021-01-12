import React, { useState } from "react";
import Router from "next/router";
import style from "styled-components";
import ReactPaginate from "react-paginate";

function Pagination({ className, numPages, currentPage }) {
  const [page, setPage] = useState(currentPage);

  const handleChangePage = ({ selected }) => {
    setPage(selected + 1);
    Router.push(`/posts/page/${selected + 1}`)
  };

  return (
    <div className={className}>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        pageCount={numPages}
        activeClassName="actived"
        onPageChange={handleChangePage}
      />
    </div>
  );
}

const PaginationStyle = style(Pagination)`
  > ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;

    > li {
      min-width: 40px;
      min-height: 40px;
      margin: 0 10px;

      > a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        cursor: pointer;
      }

      &.actived {
        > a {
          color: #fff;
          background: ${props => props.theme.colors.primary};
          border-radius: 50%;
        }
      }
    }
  }
`;

export default PaginationStyle;
