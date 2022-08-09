import { useRouter } from 'next/router';
import Link from 'next/link';
import { Home, Heart, Calendar, SecurityPass } from 'iconoir-react';
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
        <div className={`${styles.pill} ${router.pathname === '/watch-list' ? styles.active : ''}`} />
        <Link href="/watch-list">
          <a>
            <Button active={router.pathname === '/watch-list'}>
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
