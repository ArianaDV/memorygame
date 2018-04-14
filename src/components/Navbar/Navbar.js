import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          Clicky Game
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/"
              ? "active"
              : ""
          }
        >
        </li>
      </ul>
      <ul>
      <span className="navbar-brand header"> Click an image to begin </span>
      </ul>
      <ul>
      <span className="navbar-brand score"> Score: | Top Score:     </span>
      </ul>
    </div>
  </nav>
);

export default Navbar;
