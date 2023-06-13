import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logos/logo.png";
function Sidebar() {
  const [navclass, setNavClass] = useState("collapse navbar-collapse ");
  const [navactive, setNavActive] = useState(false);
  const togglenavbar = () => {
    setNavActive((pre) => (navactive ? false : true));

    setNavClass(
      navactive ? "collapse navbar-collapse " : "collapse navbar-collapse show "
    );
  };
  const [loggedinuser, setLoggedinuser] = useContext(UserContext);
  const [isAdmin, setISAdmin] = useState(false);

  useEffect(() => {
    fetch("https://creative-agency-server-1c0w.onrender.com/isadmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedinuser.email }),
    })
      .then((res) => res.json())
      .then((data) => setISAdmin(data));
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link ml-5" to="/placeorder">
                Order
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link ml-5" to="/servicelist">
                Service List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link ml-5" to="/review">
                Review
              </NavLink>
            </li>

            {isAdmin && (
              <li className="nav-item">
                <NavLink className="nav-link ml-5" to="/allorder">
                  All Order
                </NavLink>
              </li>
            )}
            {isAdmin && (
              <li className="nav-item">
                <NavLink className="nav-link ml-5" to="/addservice">
                  Add Service
                </NavLink>
              </li>
            )}
            {isAdmin && (
              <li className="nav-item">
                <NavLink className="nav-link ml-5" to="/makeadmin">
                  Make Admin
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
