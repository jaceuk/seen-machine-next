import { useRouter } from 'next/router';
import Link from 'next/link';
import { Home, Heart, Calendar, SecurityPass } from 'iconoir-react';

import styles from './Footer.module.css';

export default function Footer() {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <Link href="/home">
          <a className={router.pathname === '/home' ? styles.active : ''}>
            <Home />
          </a>
        </Link>

        <Link href="/watched">
          <a className={router.pathname === '/watched' ? styles.active : ''}>
            <Heart />
          </a>
        </Link>

        <Link href="/watch-list">
          <a className={router.pathname === '/watch-list' ? styles.active : ''}>
            <Calendar />
          </a>
        </Link>

        <Link href="/recommended">
          <a className={router.pathname === '/recommended' ? styles.active : ''}>
            <SecurityPass />
          </a>
        </Link>

        <span className={styles.pill} />
      </nav>
    </footer>
  );
}
