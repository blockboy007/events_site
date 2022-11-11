import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  Contact,
  Portfolio,
  Footer,
  Packages,
  NateAndEmily,
  SamAndHeather,
  WeddingPackages,
  OtherPackages
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
          <Route path="NateAndEmily" element={<NateAndEmily />} />
          <Route path="SamAndHeather" element={<SamAndHeather />} />
        <Route path="/packages" element={<Packages />}/>
          <Route path="WeddingPackages" element={<WeddingPackages />} />
          <Route path="OtherPackages" element={<OtherPackages />} />
      </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
