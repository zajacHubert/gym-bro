'use client';

import { Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { useMap } from 'react-leaflet/hooks';
import L from 'leaflet';
import styles from './map.module.css';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';

// const markerIcon = new L.Icon({
//     iconUrl: require('../assets/marker.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),

//   iconSize: [35, 41],
// });

const ICON = icon({
  iconUrl: '/marker.png',
  iconSize: [32, 32],
});

const Map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      className={styles.mapContainer}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker icon={ICON} position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
