import Footer from '@components/NavbarBottom';
import Hero from '@components/Hero';
import styles from './LayoutMain.module.scss';

interface IProps {
  children: React.ReactNode;
}

export default function LayoutMain({ children }: IProps) {
  return (
    <div className="wrapper">
      <Hero />
      <main className={`inner-wrapper ${styles.main}`}>{children}</main>
      <Footer />
    </div>
  );
}
