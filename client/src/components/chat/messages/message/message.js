import React from "react";
import ReactEmoji from "react-emoji";
import "./message.css";

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();
    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (isSentByCurrentUser) ? (
        <div className="messageContainer justifyEnd">
            <div className="messageBox currentUser">
                <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText pr-10">{trimmedName}</p>
        </div>
    )
        : (
            <div className="messageContainer justifyStart">
                <p className="sentText pl-10">{user}</p>
                <div className="messageBox otherUser">
                    <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        )
}
export default Message