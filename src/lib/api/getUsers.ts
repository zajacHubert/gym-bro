import { User } from '@/types/user';

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch('http://localhost:3001/api/users');
  const data = await res.json();
  console.log('data', data)
  return data;
};
