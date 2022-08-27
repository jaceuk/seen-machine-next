import Link from 'next/link';
import { useRouter } from 'next/router';
import SideBar from '@components/SideBar';
import { Home, User, Calendar, SecurityPass, NavArrowLeft } from 'iconoir-react';
import styles from './Menu.module.scss';
import Button from '@components/Button';

interface ProfileProps {
  handleClose: () => void;
}

export default function Menu({ handleClose }: ProfileProps) {
  const router = useRouter();

  return (
    <SideBar type="narrow" handleClose={handleClose}>
      <>
        <header className={styles.header}>
          <button className={styles.backButton} onClick={handleClose} aria-label="Back">
            <NavArrowLeft />
          </button>
          <h1>Menu</h1>
        </header>

        <nav className={styles.nav}>
          <Link href="/">
            <a>
              <Button active={router.pathname === '/'}>
                <Home />
                Home
              </Button>
            </a>
          </Link>

          <Link href="/watched">
            <a>
              <Button active={router.pathname === '/watched'}>
                <SecurityPass />
                Watched
              </Button>
            </a>
          </Link>

          <Link href="/watchlist">
            <a>
              <Button active={router.pathname === '/watchlist'}>
                <Calendar />
                Watch list
              </Button>
            </a>
          </Link>

          <Link href="/profile">
            <a>
              <Button active={router.pathname === '/profile'}>
                <User />
                Profile
              </Button>
            </a>
          </Link>
        </nav>
      </>
    </SideBar>
  );
}
