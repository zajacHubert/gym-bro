export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  latitude?: number;
  longitude?: number;
  sports: Sport[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Sport {
  id: string;
  name: string;
  levels: Level[];
}

export interface Level {
  id: string;
  name: string;
  sports: Sport[];
}
