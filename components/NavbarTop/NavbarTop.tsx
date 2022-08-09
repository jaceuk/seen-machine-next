import { useRouter } from 'next/router';
import styles from './NavbarTop.module.scss';
import NavPrimary from '@components/NavPrimary';
import NavSecondary from '@components/NavSecondary';

export default function Navbar() {
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
        <div className="hide-on-mobile">
          <NavPrimary />
        </div>
        <NavSecondary />
      </div>
    </header>
  );
}
