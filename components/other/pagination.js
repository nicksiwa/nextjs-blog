import React, { useState } from "react";
import Router from "next/router";
import style from "styled-components";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "react-feather";

function Pagination({ className, numPages, currentPage, linkUrl }) {
  const [page, setPage] = useState(currentPage);

  const handleChangePage = ({ selected }) => {
    setPage(selected + 1);
    Router.push(`${linkUrl}/${selected + 1}`)
  };

  return (
    <div className={className}>
      <ReactPaginate
        previousLabel={<ChevronLeft />}
        nextLabel={<ChevronRight />}
        breakLabel={<MoreHorizontal />}
        pageCount={numPages}
        initialPage={currentPage - 1}
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
      min-width: 30px;
      min-height: 30px;
      margin: 0 10px;

      > a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        cursor: pointer;
        font-size: 0.9rem;
      }

      &.actived {
        > a {
          color: #fff;
          background: ${props => props.theme.colors.primary};
          border-radius: 50%;
          font-weight: bold;
        }
      }
    }
  }
`;

export default PaginationStyle;
