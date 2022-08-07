import { useRouter } from 'next/router';
import Link from 'next/link';
import { User, Search } from 'iconoir-react';
import styles from './Header.module.scss';

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <h1>
        {(router.pathname === '/home' || router.pathname === '/_error') && 'Seen Machine'}
        {router.pathname === '/watched' && 'Watched'}
        {router.pathname === '/watch-list' && 'Watch list'}
        {router.pathname === '/recommended' && 'Recommended'}
      </h1>

      <div className={styles.buttons}>
        <button className={styles.button}>
          <Link href="/profile">
            <User />
          </Link>
        </button>

        <button className={`${styles.button} ${styles.active}`}>
          <Link href="/search">
            <Search />
          </Link>
        </button>
      </div>
    </header>
  );
}
