import React, { useState } from "react";
import "./Day7.css";

const Day7 = () => {
    const [move, setMove] = useState("false");
    const [search, setSearch] = useState("false");

    console.log(move + " " + search);

    const toggleMove =() => {
        setMove(!move);
    }

    const toggleSearch =() => {
        setSearch(!search);
    }

    return(
        <div className="frame-note">
            <ui className={`hovered-menu ${move?"inactive-hovered":"active-hovered"}`}>
                <li className="hovered-menu-item"><div className="squire-ul"></div>Dashboard</li>
                <li className="hovered-menu-item"><div className="squire-ul"></div>Profile</li>
                <li className="hovered-menu-item"><div className="squire-ul"></div>Notifications</li>
                <li className="hovered-menu-item"><div className="squire-ul"></div>Messages</li>
                <li className="hovered-menu-item"><div className="squire-ul"></div>Settings</li>
            </ui>
            <div className={`notification-box ${move ? "inactive" : "active"}`}>
                <div className= "notification-navigation">
                    <div className="menu-button" onClick={toggleMove}>
                        <div className="menu-line"></div>
                        <div className="menu-line"></div>
                        <div className="menu-dot"></div>
                    </div>
                    <div className="title-notification">Notifications</div>
                    <div className="search-button" onClick={toggleSearch}></div>
                    <input className={`search-input ${search?"search-inactive":"search-active"}`} placeholder="Search ..." type="text"></input>
                </div>
                <div className="notification-space">
                    <div className="notification-line"></div>
                    <div className="notification-container">
                    <div className="notification">
                        <div className="circle-notification"></div>
                        <div className="time-notification">9:13 AM</div>
                        <div className="message-notification"><span className="first-letters-not">John Walker</span> posted a photo on your wall.</div>
                    </div>
                    <div className="notification">
                        <div className="circle-notification"></div>
                        <div className="time-notification">12:34 PM</div>
                        <div className="message-notification"><span className="first-letters-not">Alice Parker</span> commented your last post.</div>
                    </div>
                    <div className="notification">
                        <div className="circle-notification"></div>
                        <div className="time-notification">1:45 PM</div>
                        <div className="message-notification"><span className="first-letters-not">Luke Wayne</span> added you as friend.</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Day7;