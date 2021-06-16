import React from 'react';
import onlineIcon from '../../../icons/onlineIcon.png';
import closeIcon from '../../../icons/closeIcon.png';
import './InfoBar.css';

const InfoBar = ({ room }) => (
    <div className="infoBarMikassa">
      <div className="leftInnerContainerMikassa">
        <img className="onlineIconMikassa" src={onlineIcon} alt="online icon" />
        <h3>{ room } </h3>
      </div>
      <div className="rightInnerContainerMikassa">
        <a href="/"><img className="imgOriginal" src={closeIcon} alt="close icon" /></a>
      </div>
    </div>
  );
  
  export default InfoBar;