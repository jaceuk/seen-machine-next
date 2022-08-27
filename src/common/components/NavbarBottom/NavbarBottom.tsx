import styles from './NavbarBottom.module.scss';
import Nav from './components/Nav';

export default function NavbarBottom() {
  return (
    <footer className={`${styles.footer} hide-on-desktop`}>
      <Nav />
    </footer>
  );
}
