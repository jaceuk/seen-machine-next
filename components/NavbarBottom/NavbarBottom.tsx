import styles from './NavbarBottom.module.scss';
import NavPrimary from '@components/NavPrimary';

export default function NavbarBottom() {
  return (
    <footer className={`${styles.footer} hide-on-desktop`}>
      <NavPrimary />
    </footer>
  );
}
