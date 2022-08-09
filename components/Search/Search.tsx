import Image from 'next/image';
import SideBar from '@components/SideBar';
import { NavArrowLeft } from 'iconoir-react';
import backdropPlaceholder from '/images/backdropPlaceholder.png';
import styles from './Search.module.scss';
import HeaderSearch from '@components/HeaderSearch';

interface IProps {
  handleClose: () => void;
}

export default function Search({ handleClose }: IProps) {
  return (
    <SideBar handleClose={handleClose}>
      <>
        <HeaderSearch />
        <button className={styles.backButton} onClick={handleClose} aria-label="Back">
          <NavArrowLeft />
        </button>
        <main className={styles.main}>
          <h1 className={styles.title}>search</h1>
        </main>
      </>
    </SideBar>
  );
}
