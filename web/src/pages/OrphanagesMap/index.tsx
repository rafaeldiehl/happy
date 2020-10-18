import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../assets/images/map-marker.svg';

import './styles.css';

import mapIcon from '../../utils/mapIcon';

function OrphanagesMap() {
  return (
    <div id="page-map">
        <aside>
            <header>
                <Link to="/">
                    <img src={mapMarkerImg} alt="Happy"/>
                </Link>
                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>
            <footer>
                <strong>Cerquilho</strong> <br />
                <span>São Paulo</span>
            </footer>
        </aside>

        <Map 
            center={[-23.1613542,-47.7437126]}
            zoom={15}
            style={{
                width: '100%',
                height: '100%'
            }}
        >
            
            <TileLayer 
                url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker
                icon={mapIcon}
                position={[-23.1613542,-47.7437126]}
            >
                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                    Lar das meninas
                    <Link to="/orphanages/1">
                        <FiArrowRight size={28} color="#FFF" />
                    </Link>
                </Popup>
            </Marker>
        </Map>

        <Link to="/orphanages/create" className="create-orphanage">
            <FiPlus size={32} color="#FFF" />
        </Link>
    </div>
  );
}

export default OrphanagesMap;
