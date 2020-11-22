import React from "react";

const PageNumber = ({ page, lastPage, setPage }) => {
  console.log(lastPage);
  return lastPage === 0 || lastPage === 1 ? (
    <div></div>
  ) : (
    <div className="page-numb">
      {page - 3 > 0 && (
        <span
          onClick={() => {
            setPage(1);
          }}
        >
          PREMIERE PAGE
        </span>
      )}
      {page - 3 > 1 && <p>...</p>}

      {page - 2 > 0 && (
        <span
          onClick={() => {
            setPage(page - 1);
          }}
        >
          {page - 2 === 1 ? "PREMIERE PAGE" : page - 2}
        </span>
      )}
      {page - 1 > 0 && (
        <span
          onClick={() => {
            setPage(page - 2);
          }}
        >
          {page - 1 === 1 ? "PREMIERE PAGE" : page - 1}
        </span>
      )}
      <p className="actual-page">
        {page === 1
          ? "PREMIERE PAGE"
          : page === lastPage
          ? "DERNIERE PAGE"
          : page}
      </p>
      {page + 1 <= lastPage && (
        <span
          onClick={() => {
            setPage(page + 1);
          }}
        >
          {page + 1 === lastPage ? "DERNIERE PAGE" : page + 1}
        </span>
      )}
      {page + 2 <= lastPage && (
        <span
          onClick={() => {
            setPage(page + 2);
          }}
        >
          {page + 2 === lastPage ? "DERNIERE PAGE" : page + 2}
        </span>
      )}
      {page + 3 <= lastPage && (
        <>
          <p>...</p>
          <span
            onClick={() => {
              setPage(lastPage);
            }}
          >
            DERNIERE PAGE
          </span>
        </>
      )}
    </div>
  );
};

export default PageNumber;
