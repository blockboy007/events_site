import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
  return (
    <body className="portfolioBody">
      <h1 className="portfolioHeader">Weddings</h1>
      <div className="portfolioLinks">

        <Link className="portfolioLink" to="/NateAndEmily">
          <h1>Nate and Emily</h1>
          <div className="portfolioLinkImage">
            <img src="https://images.unsplash.com/photo-1483136781463-b71cca943b51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1798&q=80" alt=""/>
          </div>
        </Link>
        <Link className="portfolioLink" to="/SamAndHeather">
          <h1>Sam and Heather</h1>
          <div className="portfolioLinkImage">
            <img src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
          </div>
        </Link>
        <Link className="portfolioLink" to="">
          <h1>Madi and John</h1>
          <div className="portfolioLinkImage">
            <img src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
          </div>
        </Link>
      </div>
    </body>
  );
}

export default Portfolio;
