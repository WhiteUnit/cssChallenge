import React from "react";
import "./Day8.css";

const Day8 = () => {
  return (
    <div className="blob-frame">
      <div className="blob-container">
        <div className="main-blob">
            <div className="blob-inside-one"></div>
            <div className="blob-inside-two"></div>
            <div className="blob-inside-three">
                <div className="blob-inside-first-half"></div>
            </div>
        </div>
        <div className="mini-blob-one"></div>
        <div className="mini-blob-two"></div>
      </div>
    </div>
  );
};

export default Day8;
