//Navbar.js
import React, {useEffect} from 'react';
import '../styles/personalData.scss';
import profilePhoto from '../images/foto-perfil.jpg';

const PersonalData = () => {

  return (
    <div className="personalData">
      <div className="dataContainer">
        <img src={profilePhoto} className="profilePhoto" alt="Foto Patricio Toledo" />
      </div>
    </div>
  )
};
export default PersonalData;