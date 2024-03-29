import { ToastContainer } from 'react-toastify';
import SideBar from '@components/SideBar';
import styles from './DetailsSideBar.module.scss';
import HeaderSideBar from '@components/HeaderSideBar';
import Hero from './components/Hero';
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
          <Status />
          <div className={`inner ${styles.synopsis}`}>{data.overview}</div>
          <TabGroup />
        </main>
      </>
    </SideBar>
  );
}
