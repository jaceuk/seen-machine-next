import SideBar from '@components/SideBar';
import { ArrowLeft } from 'iconoir-react';
import styles from './Search.module.scss';
import HeaderSearch from '@components/HeaderSearch';

interface IProps {
  handleClose: () => void;
}

export default function Search({ handleClose }: IProps) {
  return (
    <SideBar handleClose={handleClose}>
      <>
        <HeaderSearch handleClose={handleClose} />
        <main className={styles.main}>
          <h1>search</h1>
        </main>
      </>
    </SideBar>
  );
}
