import { useRouter } from 'next/router';
import Hero from './components/Hero';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <div className="wrapper full-width">
      <div className={styles.container}>
        <div className={`${styles.image} ${router.pathname !== '/' ? 'hide-on-mobile' : ''}`}>
          <Hero />
        </div>

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
