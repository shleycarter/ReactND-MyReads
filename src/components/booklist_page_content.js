import React from "react";
import SearchButton from "./search_button.js";

const BookListPage = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>Ash Reads</h1>
      </div>
      <div className="list-books-content">
        <span />
      </div>
      <SearchButton />
    </div>
  );
};

export default BookListPage;
