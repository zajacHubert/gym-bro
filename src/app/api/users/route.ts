import { NextApiRequest, NextApiResponse } from 'next';
import { users } from '@/data/users';

export async function GET(request: NextApiRequest, response: NextApiResponse) {
  return response.json(users);
}
