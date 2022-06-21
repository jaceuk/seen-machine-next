import { useRouter } from 'next/router';
import Link from 'next/link';
import HomeSVG from '@components/svgs/HomeSVG';
import WatchedSVG from '@components/svgs/WatchedSVG';
import WatchListSVG from '@components/svgs/WatchListSVG';
import RecommendedSVG from '@components/svgs/RecommendedSVG';
import styles from './Footer.module.css';

export default function Footer() {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <Link href="/home">
          <a className={router.pathname === '/home' ? styles.active : ''}>
            <HomeSVG />
          </a>
        </Link>
        <Link href="/watched">
          <a className={router.pathname === '/watched' ? styles.active : ''}>
            <WatchedSVG />
          </a>
        </Link>
        <Link href="/watch-list">
          <a className={router.pathname === '/watch-list' ? styles.active : ''}>
            <WatchListSVG />
          </a>
        </Link>
        <Link href="/recommended">
          <a className={router.pathname === '/recommended' ? styles.active : ''}>
            <RecommendedSVG />
          </a>
        </Link>
        <span className={styles.pill} />
      </nav>
    </footer>
  );
}
