import styles from './Hero.module.scss';
import Navbar from '@components/NavbarTop';
import Image from 'next/image';
import heroPlaceholder from '/images/hero.jpg';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.header}>
        <Navbar />
      </div>

      <Image layout="fill" objectFit="cover" priority src={heroPlaceholder} alt="" />

      <div className={styles.footer}>
        <div className={styles.fadeOut}></div>
      </div>
    </div>
  );
}
