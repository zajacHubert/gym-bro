import { API_URL } from '@/constants/api';
import { User } from '@/types/user';

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${API_URL}/users`);
  const data = await res.json();
  return data.users;
};
