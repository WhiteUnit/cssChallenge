import React from "react";
import "./Day5.css";

const Day5 = () => {
  return (
    <div className="frame-chart">
      <div className="description-chart">
        <div className="report-date">
          <h2>WEEKLY REPORT</h2>
          <h3>01 Feb - 07 Feb</h3>
        </div>
        <div className="revenue-price">
          <h3>Revenue</h3>
          <h2>$ 3621.79</h2>
        </div>
      </div>
      <div className="line-description">
        <span className="line-red"></span>
        <p className="line-description-item">Views</p>
        <span className="line-blue"></span>
        <p className="line-description-item">Purchases</p>
      </div>
      <div className="chart">
      <div className="top-line"></div>
      <div className="middle-line"></div>
          <div className="chart-lines">
              <div className="data-point mon-dot-bot bot">
                  <div className="number-chart">82</div>
              </div>
              <div className="data-point tue-dot-bot bot">
              <div className="number-chart">62</div>
              </div>
              <div className="data-point wed-dot-bot bot">
              <div className="number-chart">82</div>
              </div>
              <div className="data-point thu-dot-bot bot">
              <div className="number-chart">62</div>
              </div>
              <div className="data-point fri-dot-bot bot">
              <div className="number-chart">102</div>
              </div>
              <div className="data-point sat-dot-bot bot">
              <div className="number-chart">52</div>
              </div>
              <div className="data-point sun-dot-bot bot">
              <div className="number-chart">62</div>
              </div>
              <svg className="chart-field-first">
              <polyline className="first-line" points="40,113 94,130 150,115 206,128 262,100 310,130 360,120"/>
              </svg>
              <div className="data-point mon-dot-top top">
              <div className="number-chart">162</div>
              </div>
              <div className="data-point tue-dot-top top">
              <div className="number-chart">182</div>
              </div>
              <div className="data-point wed-dot-top top">
              <div className="number-chart">162</div>
              </div>
              <div className="data-point thu-dot-top top">
              <div className="number-chart">62</div>
              </div>
              <div className="data-point fri-dot-top top">
              <div className="number-chart">62</div>
              </div>
              <div className="data-point sat-dot-top top">
              <div className="number-chart">62</div>
              </div>
              <div className="data-point sun-dot-top top">
              <div className="number-chart">62</div>
              </div>
              <svg className="chart-field-second">
              <polyline className="second-line" points="40,110 94,65 150,85 206,65 262,90 310,100 360,70"/>
              </svg>
          </div>
          <div className="days">
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
              <div>Sun</div>
          </div>
      </div>
    </div>
  );
};

export default Day5;
