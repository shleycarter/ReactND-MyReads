import React, { Component } from "react";
import BookShelf from "./book_shelf.js";
import SearchButton from "./search_button.js";
import { PropTypes } from "prop-types";

class BookLibrary extends Component {
  static PropTypes = {
    label: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onSwitchShelf: PropTypes.func.isRequired
  };

  render() {
    const books = this.props.books;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Ash Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              label="Currently Reading"
              books={books.filter(book => book.shelf === "currentlyReading")}
              onSwitchShelf={this.props.onChange}
            />
            <BookShelf
              label="Want to Read"
              books={books.filter(book => book.shelf === "wantToRead")}
              onSwitchShelf={this.props.onChange}
            />
            <BookShelf
              label="Read"
              books={books.filter(book => book.shelf === "read")}
              onSwitchShelf={this.props.onChange}
            />
            <SearchButton />
          </div>
        </div>
      </div>
    );
  }
}

export default BookLibrary;
