import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/shop";
import Header from "./component/Header/Header";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import { auth, signInWithGoogle } from "./firebase/firebase.utils";
const HatsPage = () => (
  <div>
    <h1>Holaaaaaaaaaa</h1>
  </div>
);

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    let unsubscribe;
    unsubscribe = auth.onAuthStateChanged((usr) => {
      setUser(usr);
    });
    return () => {
      unsubscribe();
    };
  }, [SignInAndSignUp]);
  console.log(user);
  return (
    <div className="App">
      <Header currentUser={user} />
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
