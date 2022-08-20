import Button from '@components/Button';
import { signIn } from 'next-auth/react';
import { GoogleCircled } from 'iconoir-react';
import styles from './SignIn.module.scss';

export default function SignIn() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.logo}>Seen Machine</div>
        <div>
          <h1>Recommend TV shows and movies to your friends</h1>
          <div className={styles.subtitle}>and keep track of what you&apos;ve watched</div>
        </div>
      </main>
      <div className={styles.buttons}>
        <button onClick={() => signIn('google')}>
          <Button active>
            <GoogleCircled />
            Sign in with Google
          </Button>
        </button>
      </div>
    </div>
  );
}
