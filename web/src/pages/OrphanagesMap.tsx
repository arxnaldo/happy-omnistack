import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';

import MapMarkerImg from '../images/happy-icon.svg';
import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap(){
     return(
         <div id="page-map">
              <aside>
                   <header>
                         <img src={MapMarkerImg} alt="Happy"/>
                         <h2>Escolha um orfanato no mapa</h2>
                         <p>Muitas crianças estão esperando a sua visita!</p>
                   </header>
                   <footer>
                         <strong>Petrolina</strong>
                         <span>Pernambuco</span>
                   </footer>
              </aside>
              <Map
               center={[-9.3898967,-40.5053937]}
               zoom={17}
               style={{width: '100%', height: '100%'}}
              ><TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
              </Map>
              <Link to="" className="create-orphanage">
                   <FiPlus size={32} color= "#fff"/>
              </Link>/
         </div>
     )
}

export default OrphanagesMap;