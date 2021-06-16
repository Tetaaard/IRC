import React from 'react';
import onlineIcon from '../../../icons/onlineIcon.png';
import closeIcon from '../../../icons/closeIcon.png';
import './InfoBar.css';

const InfoBar = ({ room }) => (
    <div className="infoBarSpeak">
      <div className="leftInnerContainerSpeak">
        <img className="onlineIconSpeak" src={onlineIcon} alt="online icon" />
        <h3>{ room }</h3>
      </div>
      <div className="rightInnerContainerSpeak">
        <a href="/"><img className="imgOriginal" src={closeIcon} alt="close icon" /></a>
      </div>
    </div>
  );
  
  export default InfoBar;