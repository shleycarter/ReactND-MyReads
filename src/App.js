import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookLibrary from "./components/book_library";
import "./App.css";
import SearchPage from "./components/search_library";

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
        <Route
          exact
          path="/search"
          render={({ history }) => (
            <SearchPage
              onInputChange={this.updateBookData}
              bookSearch={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
