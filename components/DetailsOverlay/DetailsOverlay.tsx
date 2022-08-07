import Image from 'next/image';
import Overlay from '@components/Overlay';
import { NavArrowLeft } from 'iconoir-react';
import backdropPlaceholder from '/images/backdropPlaceholder.png';
import styles from './DetailsOverlay.module.css';

interface IProps {
  data: any;
  handleClose: () => void;
}

export default function DetailsOverlay({ data, handleClose }: IProps) {
  return (
    <Overlay>
      <button className={styles.backButton} onClick={handleClose} aria-label="Back">
        <NavArrowLeft />
      </button>
      <div className={styles.backdrop}>
        <Image
          layout="fill"
          objectFit="cover"
          src={data.backdrop_path ? `https://image.tmdb.org/t/p/w400/${data.backdrop_path}` : backdropPlaceholder}
          alt=""
        />
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>{data.name || data.title}</h1>
      </main>
    </Overlay>
  );
}
