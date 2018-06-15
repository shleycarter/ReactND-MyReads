import React, { Component } from "react";
import BookShelf from "./book_shelf.js";
import SearchButton from "./search_button.js";
import { PropTypes } from "prop-types";

class BookLibrary extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    const shelfCollection = this.props.books;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Ash Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              label="Currently Reading"
              shelfCollection={shelfCollection.filter(
                book => book.shelf === "currentlyReading"
              )}
            />
            <BookShelf label="Want to Read" />
            <BookShelf label="Read" />
            <SearchButton />
          </div>
        </div>
      </div>
    );
  }
}

export default BookLibrary;
