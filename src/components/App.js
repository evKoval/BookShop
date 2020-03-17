import React, { Component } from "react";
import HeaderContainer from "./HeaderContainer.jsx";
import BooksContainer from "./BooksContainer.jsx";
import CartContainer from "./CartContainer.jsx";
import { Switch, withRouter, Redirect, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/reduxStore";

class App extends Component {
  render() {
    return (
      <div className={"appWrapper"}>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" render={() => <Redirect to={"/books"} />} />
          <Route path="/books" render={() => <BooksContainer />} />
          <Route path="/cart" render={() => <CartContainer />} />
        </Switch>
      </div>
    );
  }
}

let AppWithRouter = withRouter(App);

const MainApp = props => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppWithRouter />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;
