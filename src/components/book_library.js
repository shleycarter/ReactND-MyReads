import React, { Component } from "react";
import BookShelf from "./book_shelf.js";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

class BookLibrary extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };

  render() {
    const books = this.props.books;
    const bookShelfLabels = ["Currently Reading", "Want to Read", "Read"];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Ash Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              label={bookShelfLabels[0]}
              books={books.filter(book => book.shelf === "currentlyReading")}
              onSwitchShelf={this.props.onChange}
            />
            <BookShelf
              label={bookShelfLabels[1]}
              books={books.filter(book => book.shelf === "wantToRead")}
              onSwitchShelf={this.props.onChange}
            />
            <BookShelf
              label={bookShelfLabels[2]}
              books={books.filter(book => book.shelf === "read")}
              onSwitchShelf={this.props.onChange}
            />
          </div>
        </div>
        <div className="open-search">
          <Link title="Add another book" to="/search">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default BookLibrary;
