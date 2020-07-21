import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
// this keyword is used for methods which are outside render
class Pagination extends Component {
  render() {
    const { totalMovies, pageSize, currentPage, handlePageCick } = this.props;
    const numberOfPages = Math.ceil(totalMovies / pageSize);
    // console.log(this.props.totalMovies);
    // console.log(this.props.handlePageCick);
    // console.log("function", this.props.pageClick);
    const pages = _.range(1, numberOfPages + 1);
    // console.log(pages);
    if (pages.length === 1) return null;
    return (
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                currentPage === page ? "page-item active" : "page-item"
              }
            >
              <a onClick={() => handlePageCick(page)} className="page-link">
                {page}
              </a>
            </li>
          ))}
        </ul>
        {/* {pages.m} */}
      </nav>
    );
  }
}

Pagination.propTypes = {
  totalMovies: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePageCick: PropTypes.func.isRequired,
};

export default Pagination;
