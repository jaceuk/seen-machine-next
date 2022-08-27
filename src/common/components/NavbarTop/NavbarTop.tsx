import styles from './NavbarTop.module.scss';
import Nav from './components/Nav';
import LogoLink from '@components/LogoLink';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <LogoLink />

      <div className={styles.buttons}>
        <Nav />
      </div>
    </header>
  );
}
