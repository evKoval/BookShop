import React, { Component } from "react";
import HeaderContainer from "./HeaderContainer";
import BoooksContainer from "./BoooksContainer";
import CartContainer from "./CartContainer";
import { Switch, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/reduxStore";

class App extends Component {
  render() {
    return (
      <div className={"appWrapper"}>
        <HeaderContainer />
        <Switch>
          <Route path="/books" render={() => <BoooksContainer />} />
          <Route path="/cart" render={() => <CartContainer />} />
        </Switch>
      </div>
    );
  }
}

let AppWithRouter = withRouter(App);

const MainApp = props => {
  return (
    <Provider store={store}>
      <AppWithRouter />
    </Provider>
  );
};

export default App;
