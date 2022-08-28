import { useRouter } from 'next/router';
import Link from 'next/link';
import { Home, User, Calendar, SecurityPass } from 'iconoir-react';
import IconButton from '@components/IconButton';
import styles from './Nav.module.scss';

export default function Nav() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.navItem}>
        <div className={`${styles.pill} ${router.pathname === '/' ? styles.active : ''}`} />
        <Link href="/">
          <a>
            <IconButton active={router.pathname === '/'}>
              <Home />
              <span className="sr-only">Home</span>
            </IconButton>
          </a>
        </Link>
      </div>

      <div className={styles.navItem}>
        <div className={`${styles.pill} ${router.pathname === '/history' ? styles.active : ''}`} />
        <Link href="/history">
          <a>
            <IconButton active={router.pathname === '/history'}>
              <SecurityPass />
              <span className="sr-only">Watch history</span>
            </IconButton>
          </a>
        </Link>
      </div>

      <div className={styles.navItem}>
        <div className={`${styles.pill} ${router.pathname === '/list' ? styles.active : ''}`} />
        <Link href="/list">
          <a>
            <IconButton active={router.pathname === '/list'}>
              <Calendar />
              <span className="sr-only">Watch list</span>
            </IconButton>
          </a>
        </Link>
      </div>

      <div className={styles.navItem}>
        <div className={`${styles.pill} ${router.pathname === '/profile' ? styles.active : ''}`} />
        <Link href="/profile">
          <a>
            <IconButton active={router.pathname === '/profile'}>
              <User />
              <span className="sr-only">Profile</span>
            </IconButton>
          </a>
        </Link>
      </div>
    </nav>
  );
}
