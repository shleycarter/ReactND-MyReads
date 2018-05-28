import React from "react";
import SearchButton from "./search_button.js";
import BookShelf from "./booklist_shelf.js";

const BookListPage = (props) => {
  
  filterBooks = (shelf) => {
    const {books} = 
  }
  
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>Ash Reads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf 
          title="Currently Reading"
          books={ this.filterBooks("currentlyReading") />
        </div>
      </div>
      <SearchButton />
    </div>
  );
};

export default BookListPage;
