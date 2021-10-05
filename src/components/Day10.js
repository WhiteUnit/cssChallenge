import React from "react";
import "./Day10.css";

const Day10 = () => {
  return (
    <div className="clock-frame">
      <div className="middle-clock-frame">
        <svg
          width="240"
          height="240"
          viewBox="0 0 100 100"
          version="1.1"
        >
          <circle
            cx="50"
            cy="50"
            r="43"
            stroke="#fff"
            stroke-width="1.5"
            stroke-dasharray="0 7.5"
            stroke-linecap="round"
            fill="transparent"
          />
          <circle
            className = "circle-anima"
            cx="50"
            cy="50"
            r="47"
          />
        </svg>
        <div className="clock-data-container">
            <div className="clock-date">MON 15 JAN 2015</div>
            <div className="clock">11:42</div>
            <div className="body-information">
                <div className="heart-bitrate">
                    <div className="clock-hearth"></div>
                    82
                </div>
                <div className="kcal-value">1248 KCAL</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Day10;
