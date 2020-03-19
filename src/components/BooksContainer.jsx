import React, { Component } from "react";
import { connect } from "react-redux";
import { getBooks } from "../redux/bookShopReducer.js";
import BookCard from "./BookCard.jsx";
import Modal from "./Modal.jsx";

class BooksContainer extends Component {
  state = {
    isModalOpen: false,
    selectedBook: {}
  };
  toggleModal = book => {
    this.setState(state => ({ isModalOpen: !state.isModalOpen, selectedBook: this.props.book }));
  };
  componentDidMount() {
    this.props.getBooks();
    console.log(this.props.books);
  }
  render() {
    return (
      <div>
        {this.props.books.map(book => (
          <BookCard onClick={this.toggleModal} book={book} key={book.isbn13} />
        ))}
        <Modal>
          <h1>{this.state.selectedBook.title}</h1>{" "}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.bookShopPage.books,
    isFetching: state.bookShopPage.isFetching
  };
};

export default connect(mapStateToProps, { getBooks })(BooksContainer);
