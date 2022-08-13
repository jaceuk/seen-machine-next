import styles from './AccountHeader.module.scss';

export default function AccountHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Seen Machine</div>
    </div>
  );
}
