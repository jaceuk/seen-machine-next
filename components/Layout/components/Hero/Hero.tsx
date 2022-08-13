import { useRouter } from 'next/router';
import styles from './Hero.module.scss';
import Image from 'next/image';
import heroPlaceholder from '/images/hero.jpg';

export default function Hero() {
  const router = useRouter();

  return (
    <div className={`${styles.hero} ${router.pathname !== '/' ? 'hide-on-mobile' : ''}`}>
      <Image layout="fill" objectFit="cover" priority src={heroPlaceholder} alt="" />

      <div className={styles.footer}>
        <div className={styles.fadeOut}></div>
      </div>
    </div>
  );
}
