import { getUsers } from '@/lib/api/getUsers';
import React from 'react';

const UsersPage = async () => {
  const users = await getUsers();
  console.log(users);
  return <div>UsersPage</div>;
};

export default UsersPage;
