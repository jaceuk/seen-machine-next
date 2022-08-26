import NavbarBottom from '@components/NavbarBottom';
import NavbarTop from '@components/NavbarTop';
import { useRouter } from 'next/router';
import Hero from './components/Hero';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
  auth: boolean;
}

export default function Layout({ children, auth }: LayoutProps) {
  const router = useRouter();

  return (
    <div className="wrapper">
      <div className={`${styles.container} ${!auth && styles.noAuth}`}>
        <div className={`${styles.image} ${router.pathname !== '/' ? 'hide-on-mobile' : ''}`}>
          <Hero />
        </div>

        <div className={styles.content}>
          {auth && <NavbarTop />}
          <main className={styles.main}>{children}</main>
          {auth && <NavbarBottom />}
        </div>
      </div>
    </div>
  );
}
