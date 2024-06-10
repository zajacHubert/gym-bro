import { Level, User } from '@/types/user';

export const defaultUser: User = {
  id: 111,
  email: 'test@test.com',
  username: 'testUsername',
  level: Level.INTERMEDIATE,
  latitude: 52.22977,
  longitude: 21.01178,
  password: 'test',
  profile_info: 'Test profile info description',
  profile_pictures: [
    {
      id: 111,
      image_url:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      is_primary: true,
    },
  ],
  sports: [
    {
      id: 1,
      sport_name: 'Running',
    },
    {
      id: 2,
      sport_name: 'Cycling',
    },
  ],
};
