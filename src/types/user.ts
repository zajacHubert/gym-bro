export enum Level {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
}

export interface Picture {
  id: number;
  image_url: string;
  is_primary: boolean;
}

export interface Sport {
  id: number;
  sport_name: string;
}

export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  latitude: number;
  longitude: number;
  level: Level;
  profile_info: string;
  sports: Sport[];
  profile_pictures: Picture[];
}
