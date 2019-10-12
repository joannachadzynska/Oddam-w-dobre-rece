import React from "react";

const pagination = (array, page, setPageNumber) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(array.length / 3); i++) {
    const element = (
      <li
        key={i}
        onClick={() => setPageNumber(i)}
        className={page === i ? "active" : null}>
        {i}
      </li>
    );
    pageNumbers.push(element);
  }
  return pageNumbers;
};

export default pagination;
