import React, { useState } from 'react';
import { Link } from "react-router-dom";
import workPicture from "../../assets/little-tattle.jpg"
import originalPicture from "../../assets/littleTattle.png"
import titanPicture from "../../assets/titanium.png"
import darkPicture from "../../assets/terroriste.jpg"
import homePicture from "../../assets/home-img.png"
import speakPicture from "../../assets/speak.jpg"

import './Home.css';

export default function Home(){
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
  
    return (
      <div className="Contain">
      <div className="HomeOuterContainer">
        <div className="HomeInnerContainer">
        <h1 className="head-title">Choose your style of irc !</h1>
          <div class="wrapper">
         
              <div className="choose-room" >
                <img src={workPicture} />
                <h3 className="heading">Work metting</h3>
                <h5>The office tool to create meetings quickly</h5>
                <Link to={'/join-work'}>
                <button className={'go mt-20'} type="submit">Sign In</button>
                </Link>
              </div>
              <div className="choose-room" >
                    <img src={originalPicture} />
                <h3 className="heading">The original</h3>
                <h5>Use the original Irc , having fun !</h5>
                <Link to={'/join-original'}>
                <button className={'go mt-20'} type="submit">Sign In</button>
                </Link>
              </div>
              <div className="choose-room" >
                    <img src={speakPicture} />
                <h3 className="heading">Just talking</h3>
                <h5>Take time to speak to you</h5>
                <Link to={'/join-speak'}>
                <button className={'go mt-20'} type="submit">Sign In</button>
                </Link>
              </div>
              <div className="choose-room" >
                    <img src={titanPicture} />
                <h3 className="heading">Go to kill a Titan</h3>
                <h5>Are you ready to join the exploration bataillon</h5>
                <Link to={'/join-mikassa'}>
                <button className={'go mt-20 '} type="submit">Sign In</button>
                </Link>
              </div>
              <div className="choose-room" >
                    <img src={homePicture} />
                <h1 className="heading">Speak all over the world</h1>
                <h3>You can choose a theme</h3>
                <h3>You can choose a name</h3>
                <h3>You can choose where you want to speak </h3>
                  <h3>Enjoy ! </h3>
              </div>
              <div className="choose-room" >
                    <img src={darkPicture} />
                <h3 className="heading">Dark Mode!</h3>
                <h5>Speak quickly , discretly</h5>
                <Link to={'/join-dark'}>
                <button className={'go mt-20 '} type="submit">Sign In</button>
                </Link>
              </div>
              
          </div>
        </div>
      </div>
    </div>
    )
}

