import { useRouter } from 'next/router';
import Link from 'next/link';
import { Home, Heart, Calendar, SecurityPass, User, Search } from 'iconoir-react';
import Button from '@components/Button';
import styles from './NavPrimary.module.scss';

export default function NavPrimary() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.navItem}>
        <div className={`${styles.pill} ${router.pathname === '/home' ? styles.active : ''}`} />
        <Link href="/home">
          <a>
            <Button active={router.pathname === '/home'}>
              <Home />
            </Button>
          </a>
        </Link>
      </div>

      <div className={styles.navItem}>
        <div className={`${styles.pill} ${router.pathname === '/watched' ? styles.active : ''}`} />
        <Link href="/watched">
          <a>
            <Button active={router.pathname === '/watched'}>
              <Heart />
            </Button>
          </a>
        </Link>
      </div>

      <div className={styles.navItem}>
        <div className={`${styles.pill} ${router.pathname === '/watch-list' ? styles.active : ''}`} />
        <Link href="/watch-list">
          <a>
            <Button active={router.pathname === '/watch-list'}>
              <Calendar />
            </Button>
          </a>
        </Link>
      </div>

      <div className={styles.navItem}>
        <div className={`${styles.pill} ${router.pathname === '/recommended' ? styles.active : ''}`} />
        <Link href="/recommended">
          <a>
            <Button active={router.pathname === '/recommended'}>
              <SecurityPass />
            </Button>
          </a>
        </Link>
      </div>
    </nav>
  );
}
