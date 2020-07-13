import React from 'react';
import InfoBar from "../InfoBar/InfoBar";
import onlineStatus from './onlineStatus.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div>
    {
      users
        ? (
          <div>
            <InfoBar/>
            <h5>Users in Chatroom:</h5>
            <div className="activeContainer">
              <h5>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    <img className="img" alt="Online Icon" src={onlineStatus}/>
                    {name}
                  </div>
                ))}
              </h5>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;