import { useRouter } from 'next/router';
import { NavArrowLeft } from 'iconoir-react';
import styles from './HeaderProfile.module.css';

export default function HeaderProfile() {
  const router = useRouter();

  function handleBack() {
    router.back();
  }

  return (
    <header className={styles.header}>
      <button className={styles.backButton} onClick={handleBack} aria-label="Back">
        <NavArrowLeft />
      </button>
      <h1 className={styles.h1}>Profile</h1>
    </header>
  );
}
