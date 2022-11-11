import React from "react";
import { Link } from "react-router-dom";
import "./Packages.css";

function Packages() {
  return (
    <body className="packageBody">
      <div className="packageDiv">
        <Link className="packageLink" to="/WeddingPackages">
          <div className="packageLinkImage">
            <h1>Weddings</h1>
            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
          </div>
        </Link>
        <Link className="packageLink" to="/OtherPackages">
          <div className="packageLinkImage">
            <h1>Birthdays, Reunions, and more</h1>
            <img src="https://images.unsplash.com/photo-1562967005-a3c85514d3e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
          </div>
        </Link>
      </div>
    </body>
  );
}

export default Packages;
