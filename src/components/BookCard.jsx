import React from "react";
import { booksAPI } from "../api/api";

const BookCard = ({ book }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <img src={book.image} alt="" />
      <div>isbn13:{book.isbn13}</div>
      <div>price:{book.price}$</div>
    </div>
  );
};

export default BookCard;
