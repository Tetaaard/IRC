import React from 'react';

import onlineIcon from '../../../icons/onlineIcon.png';
import userIcon from '../../../icons/userIcon.png';
import { FcGlobe} from 'react-icons/fc';
import { FcList } from 'react-icons/fc';
import {FcPortraitMode} from "react-icons/fc";
import './TextContainer.css';

const TextContainer = ({ users }) => (
  
  <div className="textContainerSpeak">
     {
      users
        ? (
    <div>
      <div className="barSpeak"> Chat</div>
      <h1> <span role="imgSpeak" aria-label="emoji"><FcGlobe/> </span>Around the world </h1>
      <h3>You are in room:
      { users.slice(0,1).map(({room}) => (
                  <div key={room} className="theRoomSpeak">
                     <p className="roomNameSpeak" >  < FcList /> {room}</p>
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
          <div className="activeContainerSpeak">
            <h2>People currently chatting:</h2>
            <div className="peopleSpeak">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItemSpeak">
                    <div className="userIconSpeak">< FcPortraitMode /></div>
                   <p className="userNameSpeak" >{name}</p>
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