import React, { useState } from 'react';
import { Link } from "react-router-dom";
import homePicture from "../../../assets/anonymous.jpg"

import './Join.css';

export default function Join(){
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
  
    return (
      <div className="joinOuterContainerDark">
        <div className="joinInnerContainerDark">
        <img className="homePictureDark"  src={homePicture} />
          <h1 className="headingDark">Welcome !</h1>
          <h5>little tattle really discret</h5>
          <div>
            <input placeholder="What's your nickname ?" className="joinInputDark" type="text" onChange={(event) => setName(event.target.value)} />
          </div>
          <div>
            <input placeholder="Where you want chat ?" className="joinInputDark mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
          </div>
          <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chatDark?name=${name}&room=${room}`}>
            <button className={'buttonDark mt-20'} type="submit">Sign In</button>
          </Link>
        </div>
      </div>
    )
}

