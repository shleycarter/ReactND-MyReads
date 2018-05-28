import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  changeBookShelf = e => {
    this.props.onUpdate(e.target.value);
  };
  render() {
    // const book = this.props.book;
    return (
      <li key={this.props.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: 'url("${book.imageLinks.thumbnail}")'
              }}
            />
            <div className="book-shelf-changer">
              <select onChange={this.changeBookShelf} value={this.props.shelf}>
                <option value="none" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{this.props.author}</div>
        </div>
      </li>
    );
  }
}

export default Book;
