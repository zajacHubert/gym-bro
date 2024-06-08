import Map from '@/components/map';
import { getUsers } from '@/lib/api/getUsers';
import React from 'react';

const MapPage = async () => {
  const users = await getUsers();
  return (
    <div>
      <h2>Map</h2>
      <div>
        <Map users={users} />
      </div>
    </div>
  );
};

export default MapPage;
