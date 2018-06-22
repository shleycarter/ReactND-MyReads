import React, { Component } from "react";
import { PropTypes } from "prop-types";
import BookItem from "./book_item";

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onSwitchShelf: PropTypes.func.isRequired
  };

  updateBook = (book, shelf) => {
    this.props.onSwitchShelf(book, shelf);
  };
  render() {
    const books = this.props.books;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.label}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => (
              <BookItem
                book={book}
                key={index}
                onUpdate={shelf => {
                  this.updateBook(book, shelf);
                }}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
