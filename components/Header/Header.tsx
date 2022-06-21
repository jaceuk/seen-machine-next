import { useRouter } from 'next/router';
import Link from 'next/link';
import ProfileSVG from '@components/svgs/ProfileSVG';
import SearchSVG from '@components/svgs/SearchSVG';
import styles from './Header.module.css';

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

        <Link className={styles.profile} href="/profile">
          <a>
            <ProfileSVG />
          </a>
        </Link>
      </div>

      <div className={styles.search}>
        <Link href="/search">
          <button className={styles.searchButton}>
            <SearchSVG />
            <span>Search TV shows & movies</span>
          </button>
        </Link>
      </div>
    </header>
  );
}
