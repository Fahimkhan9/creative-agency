import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Add from "./components/Add/Add";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/Login/PrivateRoute";

export const UserContext = createContext()

function App() {
  const [loggedinuser,setLoggedinuser] = useState({
    name:'',
    email:"",
    isloggedin: false
  })
  return (
<UserContext.Provider value={ [loggedinuser,setLoggedinuser]}>
<Router>
      <div className="c">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path="/add">
            <Add/>
          </Route>
          
          <PrivateRoute exact path="/placeorder">
            <PlaceOrder/>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
</UserContext.Provider>
   
  );
}

export default App;
