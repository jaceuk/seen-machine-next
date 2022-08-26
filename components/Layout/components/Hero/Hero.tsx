import styles from './Hero.module.scss';
import Image from 'next/image';
import heroPlaceholder from '/images/hero.jpg';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Image layout="fill" objectFit="cover" priority placeholder="blur" src={heroPlaceholder} alt="" />

        <div className={styles.footer}>
          <div className={styles.fadeOut}></div>
        </div>
      </div>
    </div>
  );
}
