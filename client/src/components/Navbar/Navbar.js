import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div className="navWorkplz">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          Project 3 App
        </Link>
        <div>
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
            <li className="nav-item">
              <Link
                to="/SignIn"
                className={
                  window.location.pathname === "/SignIn"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Sign In
              </Link>
            </li>
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
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
