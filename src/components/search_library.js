import React, { Component } from "react";
import BookItem from "./book_item";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import * as BooksAPI from "../BooksAPI";

class SearchPage extends Component {
  state = {
    Books: [],
    query: ""
  };

  static propTypes = {
    onInputChange: PropTypes.func.isRequired,
    bookSearch: PropTypes.array.isRequired
  };
  onChange = event => {
    var value = event.target.value;
    this.setState(() => {
      return { query: value };
    });
    this.searchBooks(value);
  };

  changeBookShelf = books => {
    let bookSearch = this.props.bookSearch;
    for (let book of books) {
      book.shelf = "none";
    }

    for (let book of books) {
      for (let b of bookSearch) {
        if (b.id === book.id) {
          book.shelf = b.shelf;
        }
      }
    }
    return books;
  };

  searchBooks = val => {
    if (val.length !== 0) {
      BooksAPI.search(val, 10).then(books => {
        if (books.length > 0) {
          books = books.filter(book => book.imageLinks);
          books = this.changeBookShelf(books);
          this.setState(() => {
            return { Books: books };
          });
        }
      });
    } else {
      this.setState({ Books: [], query: "" });
    }
  };

  addNewBook = (book, shelf) => {
    this.props.onInputChange(book, shelf);
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.query.length > 0 &&
              this.state.Books.map((book, index) => (
                <BookItem
                  book={book}
                  key={index}
                  onUpdate={shelf => {
                    this.addNewBook(book, shelf);
                  }}
                />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
