import React, { Component } from "react";
import BookShelf from "./book_shelf.js";

class BookLibrary extends Component {
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
          </div>
        </div>
      </div>
    );
  }
}

export default BookLibrary;
