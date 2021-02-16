import React from "react";
import styled from "styled-components";

const Span = styled.span`
  cursor: pointer;
`;

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Span onClick={() => paginate(number)} className="page-link">
              {number}
            </Span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
