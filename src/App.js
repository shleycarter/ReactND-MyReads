import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookLibrary from "./components/book_library";

import "./App.css";
import SearchButton from "./components/search_button";

class BooksApp extends React.Component {
  state = {
    books: []
  };
  componentDidMount() {
    this.getBookData();
  }

  getBookData = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  updateBookData = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getBookData();
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookLibrary
              books={this.state.books}
              onChange={this.updateBookData}
            />
          )}
        />
        <SearchButton />
      </div>
    );
  }
}

export default BooksApp;
