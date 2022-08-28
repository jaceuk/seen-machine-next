import HeaderSideBar from '@components/HeaderSideBar';
import SideBar from '@components/SideBar';
import styles from './HelpSideBar.module.scss';

interface Props {
  handleClose: () => void;
}

export default function HelpSideBar({ handleClose }: Props) {
  return (
    <SideBar handleClose={handleClose}>
      <>
        <HeaderSideBar title="Help" handleClose={handleClose} />

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
