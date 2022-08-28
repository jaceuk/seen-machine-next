import { ToastContainer } from 'react-toastify';
import SideBar from '@components/SideBar';
import styles from './DetailsSideBar.module.scss';
import HeaderSideBar from '@components/HeaderSideBar';
import Hero from './components/Hero';
import Recommend from './components/Recommend';
import Track from './components/Track';
import History from './components/History';
import Status from './components/Status';
import TabGroup from './components/TabGroup';

interface Props {
  data: any;
  handleClose: () => void;
}

export default function DetailsSideBar({ data, handleClose }: Props) {
  return (
    <SideBar handleClose={handleClose}>
      <>
        <ToastContainer />

        <HeaderSideBar title={data.name || data.title} handleClose={handleClose} />
        <Hero filename={data.backdrop_path} />

        <main className={styles.main}>
          <div className={styles.synopsis}>{data.overview}</div>

          <Status />

          <TabGroup />
        </main>
      </>
    </SideBar>
  );
}
