import "regenerator-runtime/runtime";
import { booksAPI } from "../api/api";
import { takeEvery, put, call } from "redux-saga/effects";

const ADD_TO_CART = "ADD_TO_CART";

let initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.book, quantity: action.quantity }]
      };

    default:
      return state;
  }
};

export const addToCart = (book, quantity) => ({ type: ADD_TO_CART, book, quantity });

export default cartReducer;
