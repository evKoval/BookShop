import "regenerator-runtime/runtime";
import { booksAPI } from "../api/api";
import {takeEvery, put, call} from 'redux-saga/effects'

const SET_BOOKS = "SET_BOOKS";
const GET_BOOKS = "GET_BOOKS";
const ADD_TO_CART ="ADD_TO_CART"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  books: [],
  isFetching: false,
  cart:[]
};

const bookShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.books };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
      case ADD_TO_CART:
        return{
          ...state, cart:[...state.cart, {...action.book, quantity:action.quantity}]
        }

    default:
      return state;
  }
};

export const setBooks = books => ({ type: SET_BOOKS, books });
export const getBooks = () => ({ type: GET_BOOKS });
export const addToCart = (book, quantity) => ({ type: ADD_TO_CART, book, quantity });
export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

function* workerGetBooks(){
  const data = yield call(booksAPI.getBooks);
  yield put(setBooks(data.books));
}

export function* watchGetBooks(){
  yield takeEvery(GET_BOOKS, workerGetBooks);
}

export default bookShopReducer;
