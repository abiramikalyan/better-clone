import Link from 'next/link';
import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Better.com</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/mortgage-calculator">Mortgage Calculator</Link>
          </li>
          <li>
            <Link href="/start">Start</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}