import Overlay from '@components/Overlay';
import styles from './SideBar.module.scss';

interface IProps {
  children: JSX.Element;
  handleClose: () => void;
}

export default function SideBar({ handleClose, children }: IProps) {
  return (
    <Overlay>
      <div className={styles.container}>
        <div className={styles.clickable} onClick={handleClose}></div>
        <div className={styles.contents}>{children}</div>
      </div>
    </Overlay>
  );
}
