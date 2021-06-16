import React from 'react';

import onlineIcon from '../../../icons/onlineIcon.png';
import { SiWechat } from 'react-icons/si';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  
  <div className="textContainerOriginal">
     {
      users
        ? (
    <div>
      <div className="barOriginal"> <SiWechat /></div>
      <h1>Little Tattle <span role="img" aria-label="emoji">💬</span></h1>
      <h3>You are in :
      { users.slice(0,1).map(({room}) => (
                  <div key={room} className="theRoomOriginal">
                  {room}
                  </div>
                ))}
                </h3>
    </div>
         )
         : null
     }
    {
      users
        ? (
          <div className="activeContainerOriginal">
            <h2>People currently chatting:</h2>
            <div className="peopleOriginal">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItemOriginal">
                    <img alt="Online Icon" src={onlineIcon}/>
                    {name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;