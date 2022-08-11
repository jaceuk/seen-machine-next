import Footer from '@components/NavbarBottom';
import Hero from '@components/Hero';
import styles from './LayoutMain.module.scss';

interface LayoutMainProps {
  children: React.ReactNode;
}

export default function LayoutMain({ children }: LayoutMainProps) {
  return (
    <div className="wrapper">
      <Hero />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
