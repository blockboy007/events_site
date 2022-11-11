import React from "react";
import { Link } from "react-router-dom";
import "./OtherPackages.css";

function OtherPackages() {
  return (
    <body className="otherPackagesBody">
      <div className="otherPackagesLink">
          <h1>Birthdays</h1>
          <div className="otherPackagesLinkImage">
            <img src="https://images.unsplash.com/photo-1483136781463-b71cca943b51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1798&q=80"/>
          </div>
          <h1>Reunions and others</h1>
          <div className="otherPackagesLinkImage">
            <img src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
          </div>
      </div>
    </body>
  );
}

export default OtherPackages;
