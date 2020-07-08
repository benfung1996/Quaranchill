import React, { useState, useEffect } from 'react';
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "../InfoBar/InfoBar"
import Input from "../Input/Input"
import Messages from "../messages/messages";
import TextContainer from "../TextContainer/TextContainer";
import "./chat.css"

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('')
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const EndPoint = "https://quaranchill.herokuapp.com/";

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(EndPoint);

        setName(name);
        setRoom(room);

        socket.emit("join", { name, room }, () => {
        });

        return () => {
            socket.emit("disconnect");
            socket.off();
        }
    }, [EndPoint, location.search]);

    useEffect(() => {
        socket.on("message", (message) => {
            setMessages([...messages, message]);
        })

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit("sendMessage", message, () => setMessage(""));
        }
    }

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <div className="container">
                <TextContainer users={users} />
            </div>
        </div>
    )
}

export default Chat;