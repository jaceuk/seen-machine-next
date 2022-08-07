import { useRouter } from 'next/router';
import Link from 'next/link';
import { Home, Heart, Calendar, SecurityPass, User, Search } from 'iconoir-react';
import Button from '@components/Button';
import styles from './NavSecondary.module.scss';

export default function NavSecondary() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navItem}>
        <Link href="/profile">
          <a>
            <Button>
              <User />
            </Button>
          </a>
        </Link>
      </div>

      <div className={styles.navItem}>
        <Link href="/search">
          <a>
            <Button active>
              <Search />
            </Button>
          </a>
        </Link>
      </div>
    </nav>
  );
}
