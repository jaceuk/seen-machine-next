import Image from 'next/image';
import SideBar from '@components/SideBar';
import { NavArrowLeft } from 'iconoir-react';
import backdropPlaceholder from '/images/backdropPlaceholder.png';
import styles from './Details.module.scss';

interface IProps {
  data: any;
  handleClose: () => void;
}

export default function Details({ data, handleClose }: IProps) {
  return (
    <SideBar handleClose={handleClose}>
      <>
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
      </>
    </SideBar>
  );
}
