import { useSession } from 'next-auth/react';
import NavbarBottom from '@components/NavbarBottom';
import NavbarTop from '@components/NavbarTop';
import { useRouter } from 'next/router';
import Hero from './components/Hero';
import styles from './Layout.module.scss';
import useIsDesktop from '@hooks/useIsDesktop';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const { status } = useSession();
  const isDesktop = useIsDesktop();

  return (
    <div className="wrapper">
      <div className={`${styles.container} ${status !== 'authenticated' && styles.noAuth}`}>
        {isDesktop && (
          <div
            className={`${styles.image} ${(router.pathname !== '/' || status === 'authenticated') && 'hide-on-mobile'}`}
          >
            <Hero />
          </div>
        )}

        <div className={styles.content}>
          {status === 'authenticated' && <NavbarTop />}
          <main className={styles.main}>{children}</main>
          {status === 'authenticated' && <NavbarBottom />}
        </div>
      </div>
    </div>
  );
}
