import Image from 'next/image';
import styles from './Hero.module.scss';
import backdropPlaceholder from '@images/backdropPlaceholder.png';

interface Props {
  filename: string;
}

export default function Hero({ filename }: Props) {
  return (
    <div className={styles.backdrop}>
      <Image
        layout="fill"
        objectFit="cover"
        src={filename ? `https://image.tmdb.org/t/p/w780/${filename}` : backdropPlaceholder}
        alt=""
      />
      <div className={styles.footer}>
        <div className={styles.fadeOut}></div>
      </div>
    </div>
  );
}
