import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./WeddingPackages.css";

function WeddingPackages() {
  const [trueOne, setTrueOne] = useState(false);
  const [hoverOne, setHoverOne] = useState(false);

  const [trueTwo, setTrueTwo] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);

  const [trueThree, setTrueThree] = useState(false);
  const [hoverThree, setHoverThree] = useState(false);

  const [trueFour, setTrueFour] = useState(false);
  const [hoverFour, setHoverFour] = useState(false);

  const packageInfo = ["This is what's in package 1", "This is what's in package 2", "This is what's in package 3", "This is what's in package 4"]

  const packageOne = (
    <ul className="dropdown">
      <li> {packageInfo[0]} </li>
      <li> So is this</li>
      <li>Super cool wedding stuff</li>
      <li>Wedding Stuff</li>
      <li>flowers and such</li>
    </ul>
  );
  function handleClickOne(){
    if (trueOne === false) {
      setTrueOne(true)} else {
        setTrueOne(false);
      }
  }
  function mouseEnterOne(){
    setHoverOne(true);
  }
  function mouseLeaveOne(){
    setHoverOne(false);
  }

  const packageTwo = (
    <ul className="dropdown">
      <li> {packageInfo[1]} </li>
      <li> Two</li>
    </ul>
  );
  function handleClickTwo(){
    if (trueTwo === false) {
      setTrueTwo(true)} else {
        setTrueTwo(false);
      }
  }
  function mouseEnterTwo(){
    setHoverTwo(true);
  }
  function mouseLeaveTwo(){
    setHoverTwo(false);
  }

  const packageThree = (
    <ul className="dropdown">
      <li> {packageInfo[2]} </li>
      <li>Three</li>
    </ul>
  );
  function handleClickThree(){
    if (trueThree === false) {
      setTrueThree(true)} else {
        setTrueThree(false);
      }
  }
  function mouseEnterThree(){
    setHoverThree(true);
  }
  function mouseLeaveThree(){
    setHoverThree(false);
  }

  const packageFour = (
    <ul className="dropdown">
      <li> {packageInfo[3]} </li>
      <li>Four</li>
    </ul>
  );
  function handleClickFour(){
    if (trueFour === false) {
      setTrueFour(true)} else {
        setTrueFour(false);
      }
  }
  function mouseEnterFour(){
    setHoverFour(true);
  }
  function mouseLeaveFour(){
    setHoverFour(false);
  }

// function settingClickCode(){
//   (hoverFour & trueFour !== true) ? hoverSeeMore : null
// }


  const hoverSeeMore = (
    <h2 className='details'>Click to see details</h2>
  );

  return (
  <body className="packageTop">
    <h1 className="packageHeader">Wedding Packages</h1>
    <div className="packages">
      <div className="cards">
        <div className="card" onClick={handleClickOne} onMouseOver={mouseEnterOne} onMouseLeave={mouseLeaveOne}>
          <div className="content">
            <h1 className="packageHeading">Package 1</h1>
          </div>
            <div class="infoArea">
              {packageOne}
            </div>
        </div>

        <div className="card" onClick={handleClickTwo} onMouseOver={mouseEnterTwo} onMouseLeave={mouseLeaveTwo}>
          <div className="content">
            <h1 className="packageHeading">Package 2</h1>
          </div>
            <div class="infoArea">
              {packageTwo}
            </div>
        </div>

        <div className="card" onClick={handleClickThree} onMouseOver={mouseEnterThree} onMouseLeave={mouseLeaveThree}>
          <div className="content">
            <h1 className="packageHeading">Package 3</h1>
          </div>
            <div class="infoArea">
              {packageThree}
            </div>
        </div>

        <div className="card" onClick={handleClickFour} onMouseOver={mouseEnterFour} onMouseLeave={mouseLeaveFour}>
          <div className="content">
            <h1 className="packageHeading">Package 4</h1>
          </div>
            <div class="infoArea">
              {packageFour}
            </div>
        </div>
      </div>
    </div>
  </body>
  );
}

export default WeddingPackages;
