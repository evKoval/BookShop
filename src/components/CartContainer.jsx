import React, { Component } from "react";
import uniqBy  from "lodash/uniqBy";
import { connect } from "react-redux";
import BookCard from './BookCard.jsx';

class CartContainer extends Component {
  render() {
    return (
      <div>
        <h1>Shopping cart</h1>

        {this.props.itemsInCart.map(book => (
          <div key={book.isbn13}>
            <BookCard toggleModal={this.toggleModal} book={book} />
            <div>
              {this.props.cart.reduce((count, thisBook) => count + (book.isbn13 === thisBook.isbn13 ? 1 : 0), 0)} in
              cart
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  itemsInCart: uniqBy(state.cartPage.cart, 'title'),
  cart: state.cartPage.cart
});

export default connect(mapStateToProps, {})(CartContainer);
