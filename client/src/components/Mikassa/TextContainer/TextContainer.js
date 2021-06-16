import React from 'react';

import onlineIcon from '../../../icons/onlineIcon.png';
import userIcon from '../../../icons/userIcon.png';

import { GiAbstract022 } from 'react-icons/gi';
import {GiDiamondsSmile} from "react-icons/gi";
import './TextContainer.css';

const TextContainer = ({ users }) => (
  
  <div className="textContainerMikassa">
     {
      users
        ? (
    <div>
      <div className="barMikassa">  調査兵団</div>
      <h1 className="imgMikassa" > <span role="imgMikassa" aria-label="emoji"> </span>人間がジャガイモを食べる理由を知りたいですか？</h1>
      <h3>You are in room:
      { users.slice(0,1).map(({room}) => (
                  <div key={room} className="theRoomMikassa">
                     <p className="roomNameMikassa" >  < GiAbstract022 /> {room}</p>
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
          <div className="activeContainerMikassa">
            <h2>People currently chatting:</h2>
            <div className="peopleMikassa">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItemMikassa">
                    <div className="userIconMikassa"><GiDiamondsSmile /></div>
                   <p className="userNameMikassa" >{name}</p>
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