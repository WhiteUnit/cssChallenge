import React from "react";
import "./Day11.css";

const Day11 = () => {
    return (
        <div className="boots-frame">
            <div className="boots-floor"></div>
            <div className="boot-rotor">
                <div className="boot"></div>
            </div>
            <div className="boot-rotor delay">
                <div className="boot delay-rotor"></div>
            </div>
        </div>
    );
}

export default Day11;