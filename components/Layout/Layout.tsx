import Hero from './components/Hero';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="wrapper">
      <div className={styles.container}>
        <Hero />

        {children}
      </div>
    </div>
  );
}
