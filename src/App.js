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
      console.log({ books });
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <BookLibrary books={this.state.books} />}
        />
        <SearchButton />
      </div>
    );
  }
}

export default BooksApp;
