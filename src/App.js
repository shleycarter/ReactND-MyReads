import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookListPage from "./components/booklist_page_content";

import "./App.css";
import SearchPage from "./components/search_page";

class BooksApp extends React.Component {
  state = {
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <BookListPage />} />
        <Route exact path="/search" Component={SearchPage} />
      </div>
    );
  }
}

export default BooksApp;
