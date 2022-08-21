import { useRouter } from 'next/router';
import Link from 'next/link';
import { Home, Heart, Calendar, SecurityPass } from 'iconoir-react';
import Button from '@components/IconButton';
import styles from './NavPrimary.module.scss';

export default function NavPrimary() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.navItem}>
        <div className={`${styles.pill} ${router.pathname === '/' ? styles.active : ''}`} />
        <Link href="/">
          <a>
            <Button active={router.pathname === '/'}>
              <Home />
              <span className="sr-only">Home</span>
            </Button>
          </a>
        </Link>
      </div>

      <div className={styles.navItem}>
        <div className={`${styles.pill} ${router.pathname === '/watched' ? styles.active : ''}`} />
        <Link href="/watched">
          <a>
            <Button active={router.pathname === '/watched'}>
              <SecurityPass />
              <span className="sr-only">Watched</span>
            </Button>
          </a>
        </Link>
      </div>

      <div className={styles.navItem}>
        <div className={`${styles.pill} ${router.pathname === '/watchlist' ? styles.active : ''}`} />
        <Link href="/watchlist">
          <a>
            <Button active={router.pathname === '/watchlist'}>
              <Calendar />
              <span className="sr-only">Watch list</span>
            </Button>
          </a>
        </Link>
      </div>

      <div className={styles.navItem}>
        <div className={`${styles.pill} ${router.pathname === '/recommended' ? styles.active : ''}`} />
        <Link href="/recommended">
          <a>
            <Button active={router.pathname === '/recommended'}>
              <Heart />
              <span className="sr-only">Recommendations</span>
            </Button>
          </a>
        </Link>
      </div>
    </nav>
  );
}
