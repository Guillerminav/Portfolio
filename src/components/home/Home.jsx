import React from 'react'
import './home.css'
import plant1 from '../../assets/plant1.png'
import plant2 from '../../assets/plant2.png'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="mainContainer">
      <div className="homeContainer">
        <div className="infoContainer">
          <div className="titleContainer">
          <h1 className="title">Guillermina Bousoño</h1>
          </div>
          <div className="descriptionContainer">
            <p className="description1">
              Junior Full-Stack Developer
            </p>
            <p className="description2">
              ¡Hola! Soy una desarrolladora junior de Argentina. Impulsé mi carrera gracias al <a href="#">#ProyectoDalto</a>. Te invito a recorrer mi perfil y si algo te interesa no dudes en contactarme :)
            </p>
        </div>
        </div>
        <div className="plantsContainer">
          <div className="plant1Container">
            <img src={plant1} alt="" className="plant1" />
          </div>
          <div className="plant2Container">
            <img src={plant2} alt="" className="plant2" />
          </div>
        </div>
      </div>
      <div className="arrowDownContaienr">
        <div className="arrowDown">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </div>
  )
}

export default Home