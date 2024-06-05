import { NextApiRequest } from 'next';
import { users } from '@/data/users';

export function GET(req: NextApiRequest) {
  return Response.json({ users });
}
