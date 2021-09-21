import React from "react";
import "./Day6.css";

const Day6 = () => {
  return (
    <div className="frame-social">
      <div className="picture-button-section">
        <div className="frame-picture">
            <img
              className="picture-social"
              src="https://100dayscss.com/codepen/jessica-potter.jpg"
            ></img>
        <div className="animation-container">
          <div className="animation-picture in"></div>
          <div className="animation-picture out"></div>
        </div>
        <div className="name-container">
          <h2 className="name-social social-first">Jessica Potter</h2>
          <h3 className="name-social social-second">Visual Artist</h3>
          </div>
        </div>
        <div className="frame-button">
          <div className="button-social">Follow</div>
          <div className="button-social">Message</div>
        </div>
      </div>
      <div className="number-section">
        <div className="number-show">
          <h2>434</h2>
          <h3>Posts</h3>
        </div>
        <div className="number-show">
          <h2>21604</h2>
          <h3>Likes</h3>
        </div>
        <div className="number-show">
          <h2>12504</h2>
          <h3>Followers</h3>
        </div>
      </div>
    </div>
  );
};

export default Day6;
