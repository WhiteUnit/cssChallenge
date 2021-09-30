import React from "react";
import "./Day9.css";

const mediumRain = [{
    animationDelay: .2,
    leftPosition: 20
}, {
    animationDelay: 1.4,
    leftPosition: 200
}, {
    animationDelay: 1,
    leftPosition: 400
}, {
    animationDelay: .4,
    leftPosition: 300
}, {
    animationDelay: .1,
    leftPosition: 250
}, {
    animationDelay: .8,
    leftPosition: 350
}, {
    animationDelay: .7,
    leftPosition: 150
}

];

const Day9 = () => {


  return (
    <div className="night-frame">
      <div className="night-animation-screen">
        <div className="cloud-frame">
            {mediumRain.map((anObject, index) => {
                return (
                    <div key={`${anObject.animationDelay}_${anObject.leftPosition}`} className="rain-medium" Style={`animation-delay: ${anObject.animationDelay}s; left: ${anObject.leftPosition}px`}></div>
                );
            })}
            {mediumRain.slice(0).reverse().map((anObject, index) => {
                return (
                    <div key={`${anObject.animationDelay}+${anObject.leftPosition}`} className="rain-small" Style={`animation-delay: ${anObject.animationDelay+Math.random()}s; left: ${anObject.leftPosition+20}px`}></div>
                );
            })}
            <div className="rain-medium" Style="animation-delay: 0s; left: 80px"></div>
          <div className="moon">
            <div className="crater"></div>
            <div className="crater crater-one"></div>
            <div className="crater crater-two"></div>
            <div className="crater crater-three"></div>
          </div>
          <div className="cloud-front-all">
            <div className="cloud front-one"></div>
            <div className="cloud front-two"></div>
            <div className="cloud front-three"></div>
          </div>
          <div className="cloud-back-all">
            <div className="cloud back-one"></div>
            <div className="cloud back-two"></div>
          </div>
        </div>
      </div>
      <div className="night-info-screen">
        <div className="info-left">
          <div className="temperature">12°</div>
          <div className="night-description">
            <p className="night-small-words">Wind: E 7 km/h</p>
            <p className="night-small-words">Humidity: 87%</p>
          </div>
        </div>
        <div className="info-right">
          <div className="night-description">
            <p className="night-small-words">
              TUE <span className="night-highlights">21° / 9°</span>
            </p>
            <p className="night-small-words">
              WED <span className="night-highlights">23° / 10°</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day9;
