import NavbarBottom from '@components/NavbarBottom';
import Hero from '@components/Hero';
import styles from './Layout.module.scss';

interface LayoutMainProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutMainProps) {
  return (
    <div className="wrapper">
      <Hero />
      <main className={styles.main}>{children}</main>
      <NavbarBottom />
    </div>
  );
}
