import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <h1>Gym bro</h1>
      <nav>
        <ul>
          <li>
            <Link href='/find'>Find users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
