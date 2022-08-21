import styles from './NavbarTop.module.scss';
import NavPrimary from '@components/NavPrimary';
import NavSecondary from '@components/NavSecondary';
import LogoLink from '@components/LogoLink';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <LogoLink />

      <div className={styles.buttons}>
        <div className="hide-on-mobile">
          <NavPrimary />
        </div>
        <NavSecondary />
      </div>
    </header>
  );
}
