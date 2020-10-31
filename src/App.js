import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import Shop from "./pages/shop/shop";
import Header from "./component/Header/Header";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user-selector";
import CheckOut from "./pages/checkout/CheckOut";

function App(props) {
  console.log(props);
  let unsubscribe = null;

  useEffect(() => {
    const { setCurrentUser } = props;
    unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          console.log(snapshot);
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
        console.log(userAuth);
      }
      setCurrentUser(userAuth);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(setCurrentUser);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop" component={Shop} />

        <Route exact path="/signin">
          {props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />}
        </Route>
        <Route path="/checkout">
          <CheckOut />
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
