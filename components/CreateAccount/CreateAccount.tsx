import Button from '@components/Button';
import IconButton from '@components/IconButton';
import Link from 'next/link';
import styles from './CreateAccount.module.scss';

export default function CreateAccount() {
  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <div className={styles.logo}>Seen Machine</div>
        <div>
          <h1>Create account</h1>
          <p>Please enter your name and email address.</p>
          <p>Your password should be at least 8 characters long and contain at least 1 number.</p>
        </div>
      </main>
      <div className={styles.buttons}>
        <Link href="/">
          <a>
            <IconButton>Cancel</IconButton>
          </a>
        </Link>

        <Link href="/account/create">
          <a>
            <Button active>Create account</Button>
          </a>
        </Link>
      </div>
    </div>
  );
}
