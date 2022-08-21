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
        <main className={styles.main}>
          <div className={styles.title}>
            <button className={styles.backButton} onClick={handleClose} aria-label="Back">
              <NavArrowLeft />
            </button>
            <h1>Help</h1>
          </div>
        </main>
      </>
    </SideBar>
  );
}
