import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href='/'>Gym bro</Link>
      </h1>
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
    </header>
  );
};

export default Header;
