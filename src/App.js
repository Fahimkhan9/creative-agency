import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div className="c">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
