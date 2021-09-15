import React, { useState } from "react";
import "./Day2.css";

const Day2 = () => {
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <div className="frame">
      <div onClick={clickHandler} className="hamburger-menu">
        <div
          className={clicked ? "top-bar-active bar" : "top-bar-not-active bar"}
        ></div>
        <div
          className={
            clicked ? "middle-bar-active bar" : "middle-bar-not-active bar"
          }
        ></div>
        <div
          className={
            clicked ? "bottom-bar-active bar" : "bottom-bar-not-active bar"
          }
        ></div>
      </div>
    </div>
  );
};

export default Day2;
