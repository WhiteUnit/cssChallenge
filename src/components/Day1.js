import React from "react";
import "./Day1.css";

const Day1 = () => {
  return (
    <div className="container">
      <div className="digit-container">
        <div className="first-digit top-of-digit"></div>
        <div className="first-digit bottom-of-digit"></div>
        <div className="first-zero"></div>
        <div className="second-zero"></div>
      </div>
      <div className="big-word">DAYS</div>
      <div className="small-word">CSS CHALLENGE</div>
    </div>
  );
};

export default Day1;
