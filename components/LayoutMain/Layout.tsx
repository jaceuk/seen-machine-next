import Footer from '@components/Footer';
import Hero from '@components/Hero';
import styles from './Layout.module.scss';

interface IProps {
  children: React.ReactNode;
}

export default function LayoutSearch({ children }: IProps) {
  return (
    <div className="wrapper">
      <Hero />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
