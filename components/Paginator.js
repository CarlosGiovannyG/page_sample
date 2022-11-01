import React from "react";

const Paginator = ({ currentPage, totalItems, itemsPerPage, handlePaged }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paginator">
      <button
        disabled={currentPage === 1}
        className="buttonPrev"
        onClick={handlePaged}
        id="back"
      >
        &larr; Anterior{" "}
      </button>
      {pageNumbers.map(
        (num) =>
          currentPage === num && (
            <div className="number-page" id={num} key={`P` + num}>
              {num}
            </div>
          )
      )}

      <button
        disabled={(currentPage > pageNumbers.length - 1)}
        className="buttonNext"
        onClick={handlePaged}
        id="next"
      >
        {" "}
        Siguiente &rarr;
      </button>
    </div>
  );
};

export default Paginator;
