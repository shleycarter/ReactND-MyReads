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
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  updateBooksInfo = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.componentDidMount();
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
              onChange={this.updateBooksInfo}
            />
          )}
        />
        <SearchButton />
      </div>
    );
  }
}

export default BooksApp;
