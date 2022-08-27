import Image from 'next/image';
import SideBar from '@components/SideBar';
import backdropPlaceholder from 'src/images/backdropPlaceholder.png';
import styles from './DetailsSideBar.module.scss';
import HeaderSideBar from '@components/HeaderSideBar';

interface DetailsSideBarProps {
  data: any;
  handleClose: () => void;
}

export default function DetailsSideBar({ data, handleClose }: DetailsSideBarProps) {
  return (
    <SideBar handleClose={handleClose}>
      <>
        <HeaderSideBar title={data.name || data.title} handleClose={handleClose} />

        <div className={styles.backdrop}>
          <Image
            layout="fill"
            objectFit="cover"
            src={data.backdrop_path ? `https://image.tmdb.org/t/p/w780/${data.backdrop_path}` : backdropPlaceholder}
            alt=""
          />
        </div>
        <main className={styles.main}>details</main>
      </>
    </SideBar>
  );
}
