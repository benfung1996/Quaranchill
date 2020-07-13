import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './join.css';

export default function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div>
                    <input placeholder=" Name" className="joinInput name" type="text"
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <select className="browser-default" onChange={(event) => setRoom(event.target.value)}>
                        <option value="" disabled selected>Choose chatroom</option>
                        <option value="Music">Music</option>
                        <option value="Game">Game</option>
                        <option value="Movie">Movie</option>
                    </select>
                </div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20 amber accent-3" type="submit">Enter Chatroom</button>
                </Link>
            </div>

        </div>
    )
}
