import { Level, User } from '@/types/user';

export const users: User[] = [
  {
    id: 1,
    username: 'john_doe',
    password: 'test',
    email: 'john_doe@example.com',
    latitude: 40.712776,
    longitude: -74.005974,
    level: Level.ADVANCED,
    profile_info:
      'Lubię biegać i jeździć na rowerze. Szukam partnera do wspólnych treningów.',
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
    profile_pictures: [
      {
        id: 1,
        image_url: 'https://example.com/images/john_doe.jpg',
        is_primary: true,
      },
    ],
  },
  {
    id: 2,
    username: 'jane_smith',
    password: 'test',
    email: 'jane_smith@example.com',
    latitude: 34.052235,
    longitude: -118.243683,
    level: Level.INTERMEDIATE,
    profile_info: 'Profesjonalna pływaczka, trenuję od 10 lat.',
    sports: [
      {
        id: 3,
        sport_name: 'Swimming',
      },
    ],
    profile_pictures: [
      {
        id: 2,
        image_url: 'https://example.com/images/jane_smith.jpg',
        is_primary: true,
      },
    ],
  },
  {
    id: 3,
    username: 'mark_jones',
    password: 'test',
    email: 'mark_jones@example.com',
    latitude: 51.507351,
    longitude: -0.127758,
    level: Level.BEGINNER,
    profile_info:
      'Zaczynam przygodę z siłownią. Szukam kogoś do wspólnych treningów.',
    sports: [
      {
        id: 4,
        sport_name: 'Gym',
      },
    ],
    profile_pictures: [
      {
        id: 3,
        image_url: 'https://example.com/images/mark_jones.jpg',
        is_primary: true,
      },
    ],
  },
];
