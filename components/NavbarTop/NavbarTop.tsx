import styles from './NavbarTop.module.scss';
import NavSecondary from '@components/NavSecondary';
import LogoLink from '@components/LogoLink';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <LogoLink />

      <div className={styles.buttons}>
        <NavSecondary />
      </div>
    </header>
  );
}
