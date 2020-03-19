import React from "react";
import { booksAPI } from "../api/api";

const BookCard = ({ book, toggleModal }) => {
  return (
    <div onClick={() => toggleModal(book)}>
      <h2>{book.title}</h2>
      <img src={book.image} alt="book img" />
      <div>isbn13: {book.isbn13}</div>
      <div>price: {book.price}$</div>
    </div>
  );
};

export default BookCard;
