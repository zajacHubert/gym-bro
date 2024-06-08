'use client';

import { Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { useMap } from 'react-leaflet/hooks';
import styles from './map.module.css';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';
import { User } from '@/types/user';
import { useEffect, useState } from 'react';
import { Localization } from '@/types/localization';

const ICON = icon({
  iconUrl: '/marker.png',
  iconSize: [32, 32],
});

interface MapProps {
  users: User[];
}

const Map = ({ users }: MapProps) => {
  const [currentLocalization, setCurrentLocalization] = useState<Localization>(
    {} as Localization
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((test) =>
      setCurrentLocalization({
        latitude: test.coords.latitude,
        longitude: test.coords.longitude,
      })
    );
  }, []);

  console.log('current', currentLocalization);
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      zoomControl={true}
      // scrollWheelZoom={false}
      className={styles.mapContainer}
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

      {users.map((user) => (
        <Marker
          key={user.id}
          icon={ICON}
          position={[user.latitude, user.longitude]}
        >
          <Popup>{user.username}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
