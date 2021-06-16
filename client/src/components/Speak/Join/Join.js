import React, { useState } from 'react';
import { Link } from "react-router-dom";
import homePicture from "../../../assets/speak.jpg"

import './Join.css';

export default function Join(){
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
  
    return (
      <div className="joinOuterContainerSpeak">
        <div className="joinInnerContainerSpeak">
        <img className="homePictureSpeak"  src={homePicture} />
          <h1 className="headingSpeak">Welcome !</h1>
          <h5>the office tool to create meetings quickly</h5>
          <div>
            <input placeholder="What's your nickname ?" className="joinInputSpeak" type="text" onChange={(event) => setName(event.target.value)} />
          </div>
          <div>
            <input placeholder="Where you want chat ?" className="joinInputSpeak mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
          </div>
          <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chatSpeak?name=${name}&room=${room}`}>
            <button className={'buttonSpeak mt-20'} type="submit">Sign In</button>
          </Link>
        </div>
      </div>
    )
}

