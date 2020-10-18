import React from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';

import SideBar from '../../components/SideBar';

import { FiPlus } from "react-icons/fi";

import './styles.css';

import mapIcon from '../../utils/mapIcon';

export default function CreateOrphanage() {
  return (
    <div id="page-create-orphanage">
      <SideBar />

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map className="map"
               center={[-23.1613542,-47.7437126]}
               zoom={15}
               style={{
                   width: '100%',
                   height: 280
               }}
           >
               <TileLayer 
                   url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
              <Marker interactive={false} icon={mapIcon} position={[-27.2092052,-49.6401092]} />
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image">

              </div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">Sim</button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
