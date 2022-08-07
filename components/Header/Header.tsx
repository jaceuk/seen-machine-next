import { useRouter } from 'next/router';
import Link from 'next/link';
import { User, Search } from 'iconoir-react';
import styles from './Header.module.scss';

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <h1>
          {(router.pathname === '/home' || router.pathname === '/_error') && 'Seen Machine'}
          {router.pathname === '/watched' && 'Watched'}
          {router.pathname === '/watch-list' && 'Watch list'}
          {router.pathname === '/recommended' && 'Recommended'}
        </h1>

        <Link href="/profile">
          <a className={styles.profile}>
            <User />
          </a>
        </Link>
      </div>

      <div className={styles.search}>
        <Link href="/search">
          <button className={styles.searchButton}>
            <Search />

            <span>Search TV shows & movies</span>
          </button>
        </Link>
      </div>
    </header>
  );
}
