import React from "react";
import closeIcon from "./closeIcon.png";
import onlineIcon from "./onlineIcon.png";
import "./InfoBar.css";

const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online" />
            <h3 className="roomName">{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/join"><img src={closeIcon} alt="close" /></a>
        </div>
    </div>
)

export default InfoBar;