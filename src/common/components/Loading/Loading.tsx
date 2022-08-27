import styles from './Loading.module.scss';
import PacmanLoader from 'react-spinners/PacmanLoader';

export default function Loading() {
  return (
    <div className={styles.overlay}>
      <PacmanLoader color="white" size={35} />
    </div>
  );
}
