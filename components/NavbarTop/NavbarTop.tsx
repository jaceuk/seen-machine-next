import styles from './NavbarTop.module.scss';
import NavPrimary from '@components/NavPrimary';
import NavSecondary from '@components/NavSecondary';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Seen Machine</div>

      <div className={styles.buttons}>
        <div className="hide-on-mobile">
          <NavPrimary />
        </div>
        <NavSecondary />
      </div>
    </header>
  );
}
