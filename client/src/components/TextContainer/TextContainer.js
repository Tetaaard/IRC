import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import userIcon from '../../icons/userIcon.png';
import { FcFlowChart } from 'react-icons/fc';
import { FcMindMap } from 'react-icons/fc';
import {FaUserCircle} from "react-icons/fa";
import './TextContainer.css';

const TextContainer = ({ users }) => (
  
  <div className="textContainer">
     {
      users
        ? (
    <div>
      <div className="bar"> Infos</div>
      <h1> <span role="img" aria-label="emoji"><FcFlowChart /> </span>Little Tattle </h1>
      <h3>You are in room:
      { users.slice(0,1).map(({room}) => (
                  <div key={room} className="theRoom">
                     <p className="roomName" >  < FcMindMap /> {room}</p>
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
          <div className="activeContainer">
            <h2>People currently chatting:</h2>
            <div className="people">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    <div className="userIcon">< FaUserCircle /></div>
                   <p className="userName" >{name}</p>
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