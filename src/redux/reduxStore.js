import { combineReducers, compose, applyMiddleware, createStore } from "redux";
import bookShopReducer from "./bookShopReducer";

let reducers = combineReducers({
    bookShopPage: bookShopReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window._store_ = store;

export default store;