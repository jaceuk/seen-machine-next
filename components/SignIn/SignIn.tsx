import Button from '@components/Button';
import IconButton from '@components/IconButton';
import Link from 'next/link';
import styles from './SignIn.module.scss';

export default function SignIn() {
  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <div className={styles.logo}>Seen Machine</div>
        <div>
          <h1>Sign in</h1>
          <p>Please enter your email address and password to sign in to your account.</p>
        </div>
      </main>
      <div className={styles.buttons}>
        <Link href="/">
          <a>
            <IconButton>Cancel</IconButton>
          </a>
        </Link>

        <Link href="/account/sign-in">
          <a>
            <Button active>Sign in</Button>
          </a>
        </Link>
      </div>
    </div>
  );
}
