'use client';
import Link from 'next/link';
import styles from './header.module.css';
import { useAppSelector } from '@/store/hooks';

const Header = () => {
  const user = useAppSelector((state) => state.user.loggedUser);
  return (
    <header className={styles.header}>
      <h1>
        <Link href='/'>Gym bro</Link>
      </h1>
      {user ? (
        <nav>
          <ul className={styles.menu}>
            <li>
              <Link href='/find'>Find users</Link>
            </li>
            <li>
              <Link href='/users'>Check all users</Link>
            </li>
            <li>
              <Link href='/map'>Check on map</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <Link href='/login'>Login</Link>
      )}
    </header>
  );
};

export default Header;
