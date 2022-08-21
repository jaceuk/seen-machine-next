import Link from 'next/link';
import styles from './LogoLink.module.scss';

export default function LogoLink() {
  return (
    <Link href="/">
      <a className={styles.logo}>
        <span className={styles.logo}>Seen Machine</span>
      </a>
    </Link>
  );
}
