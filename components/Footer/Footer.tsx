import { useRouter } from 'next/router';
import Link from 'next/link';
import { Home, Heart, Calendar, SecurityPass } from 'iconoir-react';
import Button from '@components/Button';
import styles from './Footer.module.scss';

export default function Footer() {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <div className={styles.navItem}>
          <div className={`${styles.pill} ${router.pathname === '/home' ? styles.active : ''}`} />
          <Button active={router.pathname === '/home'}>
            <Link href="/home">
              <Home />
            </Link>
          </Button>
        </div>

        <div className={styles.navItem}>
          <div className={`${styles.pill} ${router.pathname === '/watched' ? styles.active : ''}`} />
          <Button active={router.pathname === '/watched'}>
            <Link href="/watched">
              <Heart />
            </Link>
          </Button>
        </div>

        <div className={styles.navItem}>
          <div className={`${styles.pill} ${router.pathname === '/watch-list' ? styles.active : ''}`} />
          <Button active={router.pathname === '/watch-list'}>
            <Link href="/watch-list">
              <Calendar />
            </Link>
          </Button>
        </div>

        <div className={styles.navItem}>
          <div className={`${styles.pill} ${router.pathname === '/recommended' ? styles.active : ''}`} />
          <Button active={router.pathname === '/recommended'}>
            <Link href="/recommended">
              <SecurityPass />
            </Link>
          </Button>
        </div>
      </nav>
    </footer>
  );
}
