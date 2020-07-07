import React from 'react';

import onlineIcon from '../InfoBar/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div>
    {
      users
        ? (
          <div>
            <h4>Users in Chatroom:</h4><hr></hr>
            <div className="activeContainer">
              <h4>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    <img className="img" alt="Online Icon" src={onlineIcon}/>
                    {name}
                  </div>
                ))}
              </h4>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;