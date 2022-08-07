import { useRouter } from 'next/router';
import Link from 'next/link';
import { User, Search } from 'iconoir-react';
import styles from './Header.module.scss';
import Button from '@components/Button';

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {(router.pathname === '/home' || router.pathname === '/_error') && 'Seen Machine'}
        {router.pathname === '/watched' && 'Watched'}
        {router.pathname === '/watch-list' && 'Watch list'}
        {router.pathname === '/recommended' && 'Recommended'}
      </div>

      <div className={styles.buttons}>
        <Button>
          <Link href="/profile">
            <User />
          </Link>
        </Button>

        <Button active>
          <Link href="/search">
            <Search />
          </Link>
        </Button>
      </div>
    </header>
  );
}
