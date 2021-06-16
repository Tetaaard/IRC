import React, { useState } from 'react';
import { Link } from "react-router-dom";
import homePicture from "../../../assets/titan-home.png"

import './Join.css';

export default function Join(){
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
  
    return (
      <div className="joinOuterContainerMikassa">
        <div className="joinInnerContainerMikassa">
        <img className="homePictureMikassa" src={homePicture} />
          <h1 className="headingMikassa">Are you ready to..</h1>
          <h5>Kill the game</h5>
          <div>
            <input placeholder="What's your nickname ?" className="joinInputMikassa" type="text" onChange={(event) => setName(event.target.value)} />
          </div>
          <div>
            <input placeholder="Where you want chat ?" className="joinInputMikassa mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
          </div>
          <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chatMikassa?name=${name}&room=${room}`}>
            <button className={'buttonMikassa mt-20'} type="submit">Sign In</button>
          </Link>
        </div>
      </div>
    )
}

