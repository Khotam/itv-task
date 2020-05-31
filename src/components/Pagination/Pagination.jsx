import React, { memo } from "react";
import ReactPaginate from "react-paginate";
import classes from "./Pagination.module.css";
import { withRouter } from "react-router-dom";

const Pagination = ({ pageCount, handlePageClick, page, history, match }) => {
  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={4}
      onPageChange={(pageIndex) => {
        const pageNumber = pageIndex.selected + 1;
        handlePageClick(pageNumber);
        if (pageNumber === 1) {
          history.push(`${match.path}`);
        } else {
          history.push(`${match.path}?page=${pageNumber}`);
        }
        window.scrollTo(0, 0);
      }}
      containerClassName={classes.pagination}
      subContainerClassName={"pages pagination"}
      activeClassName={classes.active}
      forcePage={page - 1}
    />
  );
};

export default memo(withRouter(Pagination));
