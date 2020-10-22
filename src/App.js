import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/shop";
import Header from "./component/Header/Header";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";

const HatsPage = () => (
  <div>
    <h1>Holaaaaaaaaaa</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/signin">
          <SignInAndSignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
