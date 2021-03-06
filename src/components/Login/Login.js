import React from "react";

import logo from "../../images/logos/logo.png";
import auth, { provider } from "./firebase";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
function Login() {
  const [loggedinuser, setLoggedinuser] = useContext(UserContext);

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        loggedinuser.name = res.user.displayName;
        loggedinuser.email = res.user.email;
        history.replace(from);
      })
      .catch((err) => alert(err));
  };

  return (
    <div
      className="login  text-center mt-5"
      style={{ width: "100vw", height: "90vh" }}
    >
      <div className="container ">
        <img src={logo} style={{ height: "100px", width: "300px" }} alt="" />

        <div className="card mx-auto mt-2  " style={{ width: "18rem" }}>
          <div className="card-body text-center ">
            <h5 className="card-title mt-4">Login to Continue</h5>
            <h6
              className="card-subtitle mb-2 btn btn-dark text-whitespace"
              onClick={signin}
            >
              Continue With Google
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
