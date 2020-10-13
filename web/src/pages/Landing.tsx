import React from 'react';
import { Link } from 'react-router-dom';


import '../styles/pages/landing.css';
import logo from '../images/happy-logo.svg';
import { FaArrowRight } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';

function Landing(){
     return (
     <div id="page-landing">
     <div className="content-wrapper">
        <img src={logo} alt="Happy Logo"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
          <p className="author">Feito com <FiHeart size={13} color="#ffd666"/> por Arnaldo Rodrigues</p>
        </main>

        <div className="location">
          <strong>Petrolina</strong>
          <span>Pernambuco</span>
        </div>

        <Link to="/app" className="enter-app">
          <FaArrowRight size={26} color="rgba(0, 0, 0, 0.5)"/>
        </Link>
     </div>
    </div>
     );
}

export default Landing;