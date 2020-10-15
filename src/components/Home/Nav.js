import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logos/logo.png";
function Nav() {
  const [navclass, setNavClass] = useState("collapse navbar-collapse ");
  const [navactive, setNavActive] = useState(false);

  const togglenavbar = () => {
    setNavActive((pre) => (navactive ? false : true));

    setNavClass(
      navactive ? "collapse navbar-collapse " : "collapse navbar-collapse show "
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light  mb-5 container">
      <NavLink className="navbar-brand" to="/">
        <img src={logo} style={{ height: "50px" }} alt="" />
      </NavLink>
      <button
        onClick={togglenavbar}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={navclass} id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item ml-5 active">
            <NavLink className="nav-link " to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item ml-5">
            <NavLink className="nav-link" to="/placeorder">
              Order Now
            </NavLink>
          </li>

          <li className="nav-item ml-5">
            <NavLink
              className="nav-link btn btn-dark text-white px-4"
              to="/login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
