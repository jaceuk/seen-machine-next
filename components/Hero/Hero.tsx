import styles from './Hero.module.scss';
import Header from '@components/Header';
import Image from 'next/image';
import heroPlaceholder from '/images/hero.jpg';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.header}>
        <Header />
      </div>

      <Image layout="fill" objectFit="cover" src={heroPlaceholder} alt="" />

      <div className={styles.footer}>
        <div className={styles.fadeOut}></div>
      </div>
    </div>
  );
}
