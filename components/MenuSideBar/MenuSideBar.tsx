import Link from 'next/link';
import { useRouter } from 'next/router';
import SideBar from '@components/SideBar';
import { Home, User, Calendar, SecurityPass } from 'iconoir-react';
import styles from './MenuSideBar.module.scss';
import Button from '@components/Button';
import HeaderSideBar from '@components/HeaderSideBar';

interface ProfileProps {
  handleClose: () => void;
}

export default function MenuSideBar({ handleClose }: ProfileProps) {
  const router = useRouter();

  return (
    <SideBar type="narrow" handleClose={handleClose}>
      <>
        <HeaderSideBar title="Menu" handleClose={handleClose} />

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
