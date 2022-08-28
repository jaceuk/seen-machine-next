import * as React from 'react';
import { NavArrowLeft } from 'iconoir-react';
import styles from './HeaderSideBar.module.scss';

interface Props {
  title: string;
  handleClose: () => void;
}

export default function HeaderSideBar({ handleClose, title }: Props) {
  return (
    <header className={styles.header}>
      <button className={styles.backButton} onClick={handleClose} aria-label="Back">
        <NavArrowLeft />
      </button>
      <h2>{title}</h2>
    </header>
  );
}
