import React, { Component } from "react";
import { connect } from "react-redux";
import { getBooks } from "../redux/bookShopReducer.js";
import { addToCart } from "../redux/cartReducer.js";
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
  }
  render() {
    let selectedBook = this.state.selectedBook;
    return (
      <div>
        {this.props.books.map(book => (
          <div key={book.isbn13}>
            <BookCard toggleModal={this.toggleModal} addToCart={this.addToCart} book={book}  />
            <button  onClick={() => this.props.addToCart(book, 1)}>Add to cart</button>
          </div>
        ))}
        {this.state.isModalOpen && (
          <Modal toggleModal={this.toggleModal} onClose={this.toggleModal}>
            <BookCard book={this.state.selectedBook} />
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

export default connect(mapStateToProps, { getBooks, addToCart })(BooksContainer);
