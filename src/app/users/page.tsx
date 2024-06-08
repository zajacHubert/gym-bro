import { getUsers } from '@/lib/api/getUsers';
import Link from 'next/link';
import React from 'react';

const UsersPage = async () => {
  const users = await getUsers();
  console.log('USERS', users);
  return (
    <>
      <h2>Users:</h2>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.username} - {user.sports[0].sport_name} - {user.level}{' '}
            <Link href={`/users/${user.id}`}>Check details</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
