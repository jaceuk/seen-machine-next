import Button from '@components/Button';
import IconButton from '@components/IconButton';
import Link from 'next/link';
import styles from './ResetPassword.module.scss';

export default function ResetPassword() {
  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <div className={styles.logo}>Seen Machine</div>
        <div>
          <h1>Reset password</h1>
          <p>Please enter your email address and password to sign in to your account.</p>
        </div>
      </main>
      <div className={styles.buttons}>
        <Link href="/account/sign-in">
          <a>
            <IconButton>Cancel</IconButton>
          </a>
        </Link>

        <Link href="/account/reset-password">
          <a>
            <Button active>Send instructions</Button>
          </a>
        </Link>
      </div>
    </div>
  );
}
