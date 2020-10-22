import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Holaaaaaaaaaa</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/hats">
          <HatsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
