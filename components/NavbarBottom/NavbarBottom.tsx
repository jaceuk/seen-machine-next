import { useRouter } from 'next/router';
import Link from 'next/link';
import { Home, Heart, Calendar, SecurityPass } from 'iconoir-react';
import styles from './NavbarBottom.module.scss';
import Button from '@components/Button';
import NavPrimary from '@components/NavPrimary';

export default function NavbarBottom() {
  const router = useRouter();

  return (
    <footer className={`${styles.footer} hide-on-desktop`}>
      <NavPrimary />
    </footer>
  );
}
