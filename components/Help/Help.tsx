import SideBar from '@components/SideBar';
import { NavArrowLeft } from 'iconoir-react';
import styles from './Help.module.scss';

interface HelpProps {
  handleClose: () => void;
}

export default function Help({ handleClose }: HelpProps) {
  return (
    <SideBar handleClose={handleClose}>
      <>
        <header className={styles.header}>
          <button className={styles.backButton} onClick={handleClose} aria-label="Back">
            <NavArrowLeft />
          </button>
          <h1>Help</h1>
        </header>
        <main className={styles.main}>
          <p>
            If you are experiencing any difficulites please contact{' '}
            <a href="mailto:support@seenmachine.net">support@seenmachine.net.</a>
          </p>
        </main>
      </>
    </SideBar>
  );
}
