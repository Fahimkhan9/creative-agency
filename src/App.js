import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Add from "./components/Add/Add";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/Login/PrivateRoute";
import ServiceList from "./components/PlaceOrder/ServiceList";
import Sidebar from "./components/Shared/Sidebar";
import FeedbackForm from "./components/PlaceOrder/FeedbackForm";
import AllService from "./components/Admin/AllService";
import AddService from "./components/Admin/AddService";
import MakeAdmin from "./components/Admin/MakeAdmin";

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
            <Sidebar/>
            <PlaceOrder/>
          </PrivateRoute>
          <PrivateRoute exact  path="/servicelist">
            <Sidebar/>
            <ServiceList/>
          </PrivateRoute>
          <PrivateRoute exact path="/review">
            <Sidebar/>
            <FeedbackForm/>
          </PrivateRoute>
          <PrivateRoute exact path='/allservice'>
<Sidebar/>
<AllService/>
          </PrivateRoute>
          <PrivateRoute exact path="/addservice">
            <Sidebar/>
            <AddService/>
          </PrivateRoute>
          <PrivateRoute exact path="/makeadmin">
            <Sidebar/>
            <MakeAdmin/>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
</UserContext.Provider>
   
  );
}

export default App;
