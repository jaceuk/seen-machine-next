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
        <div className={styles.backdrop}>
          <Image
            layout="fill"
            objectFit="cover"
            src={data.backdrop_path ? `https://image.tmdb.org/t/p/w400/${data.backdrop_path}` : backdropPlaceholder}
            alt=""
          />
        </div>
        <main className={styles.main}>
          <div className={styles.title}>
            <button className={styles.backButton} onClick={handleClose} aria-label="Back">
              <NavArrowLeft />
            </button>
            <h1>{data.name || data.title}</h1>
          </div>
        </main>
      </>
    </SideBar>
  );
}
