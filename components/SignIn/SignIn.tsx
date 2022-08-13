import Button from '@components/Button';
import IconButton from '@components/IconButton';
import Link from 'next/link';
import styles from './SignIn.module.scss';
import { NavArrowLeft } from 'iconoir-react/dist';

export default function SignIn() {
  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <div className={styles.logo}>Seen Machine</div>
        <div>
          <h1>Sign in</h1>
          <p>Please enter your name and email address.</p>
        </div>
      </main>
      <div className={styles.buttons}>
        <Link href="/">
          <a>
            <IconButton>
              <NavArrowLeft />
            </IconButton>
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
