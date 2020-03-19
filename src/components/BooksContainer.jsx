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
    this.setState(state => ({ isModalOpen: !state.isModalOpen, selectedBook: book }));
  };
  componentDidMount() {
    this.props.getBooks();
    console.log(this.props.books);
  }
  render() {
    let selectedBook = this.state.selectedBook;
    return (
      <div>
        {this.props.books.map(book => (
          <BookCard toggleModal={this.toggleModal} book={book} key={book.isbn13} />
        ))}
        {this.state.isModalOpen && (
          <Modal onClose={this.toggleModal}>
            <BookCard toggleModal={this.toggleModal} book={this.state.selectedBook} />
            <p>{selectedBook.subtitle}</p>
            <a href={selectedBook.url}>ItBook link</a>
          </Modal>
        )}
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
