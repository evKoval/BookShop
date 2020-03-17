import { booksAPI } from "../api/api";

const SET_BOOKS = "SET_BOOKS";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";

let initialState = {
  books: [],
  isFetching: false
};

const bookShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, books: action.books };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };

    default:
      return state;
  }
};

export const setBooks = books => ({type: SET_BOOKS, books})
export const toggleIsFetching = isFetching => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
  });

  export const requestBooks = () => {
      return async dispatch =>{
          dispatch(toggleIsFetching(true));
          let data  = await booksAPI.getBooks();
          dispatch(toggleIsFetching(false));
          dispatch(setBooks(data.books))  
      }
  }
