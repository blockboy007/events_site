import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {

  return (
    <div className="navbar">
      <NavLink className="brand" to="/">Ever After Events</NavLink>
      <ul  className="navbar-itmes">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
            <span className="sr-only"></span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/packages">
            Packages
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
