import React from 'react';

import { FiArrowRight } from 'react-icons/fi';
import { Link } from "react-router-dom";

import './styles.css';

import logoImg from '../../assets/images/logo.svg';

function Landing() {
  return (
    <div id="page-landing">
       <div className="content-wrapper">
           <div className="right-content">
                <img src={logoImg} alt="Happy"/>
                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>
           </div>
           <div className="left-content">
                <div className="location">
                    <strong>Cerquilho</strong> <br />
                    <span>São Paulo</span>
                </div>
                <Link to="/app" className="enter-app">
                    <FiArrowRight size={32} color="#222" style={{fontWeight: 900}} />
                </Link>
           </div>
       </div>
    </div>
  );
}

export default Landing;
