import SideBar from '@components/SideBar';
import { NavArrowLeft } from 'iconoir-react';
import styles from './Profile.module.scss';

interface ProfileProps {
  handleClose: () => void;
}

export default function Profile({ handleClose }: ProfileProps) {
  return (
    <SideBar handleClose={handleClose}>
      <>
        <header className={styles.header}>
          <button className={styles.backButton} onClick={handleClose} aria-label="Back">
            <NavArrowLeft />
          </button>
          <h1>Profile</h1>
        </header>
        <main className={styles.main}>options</main>
      </>
    </SideBar>
  );
}
