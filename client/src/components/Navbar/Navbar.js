import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./style.css";
import Axios from "axios";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  const history = useHistory();
  console.log("PROPS!!!", props);

  const logout = () => {
    Axios.get("/api/users/logout").then(function () {
      props.userHasAuthenticated(false);
      history.push("/");
    });
  };
  return (
    <div className="NavBar">
      <nav
        className="navbar navbar-expand-lg"
        // style={{ flex: "nowrap", "justify-content": "space-between" }}
      >
        <Link className="navbar-brand" to="/">
          Eats Around Me
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          {props.isAuthenticated ? (
            <li className="nav-item">
              <button
                onClick={logout}
                className={
                  window.location.pathname === "/SignIn"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Logout!
              </button>
            </li>
          ) : (
            <li className="nav-item">
              <Link

                to="/SignIn"
                className={
                  window.location.pathname === "/SignIn"

                to="/about"
                className={
                  // window.location.pathname === "/" ||
                  window.location.pathname === "/about"

                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Sign In
              </Link>
            </li>
          )}

          {props.isAuthenticated ? (
            ""
          ) : (
            <li className="nav-item">
              <Link
                to="/Signup"
                className={
                  window.location.pathname === "/Signup"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Sign Up
              </Link>
            </li>
          )}

          <li className="nav-item">
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
