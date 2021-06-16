import React from 'react';

import onlineIcon from '../../../icons/onlineIcon.png';
import userIcon from '../../../icons/userIcon.png';
import { GiMineExplosion} from 'react-icons/gi';
import { GiExplodingPlanet} from 'react-icons/gi';
import {GiDeathSkull} from "react-icons/gi";
import './TextContainer.css';

const TextContainer = ({ users }) => (
  
  <div className="textContainerDark">
     {
      users
        ? (
    <div>
      <div className="barDark"> Boom </div>
      <h1> <span role="imgDark" aria-label="emoji"><GiMineExplosion/> </span>Around the world </h1>
      <h3>You are in room:
      { users.slice(0,1).map(({room}) => (
                  <div key={room} className="theRoomDark">
                     <p className="roomNameDark" >  < GiExplodingPlanet /> {room}</p>
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
          <div className="activeContainerDark">
            <h2>People currently chatting:</h2>
            <div className="peopleDark">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItemDark">
                    <div className="userIconDark">< GiDeathSkull/></div>
                   <p className="userNameDark" >{name}</p>
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