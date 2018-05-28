import React from "react";
import Book from "./book_item.js";

const BookShelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.label}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid" />
        <Book
          id={props.id}
          author={props.authors}
          title={props.title}
          shelf={props.shelf}
          thumbnail={props.imageLinks}
        />
      </div>
    </div>
  );
};

export default BookShelf;
