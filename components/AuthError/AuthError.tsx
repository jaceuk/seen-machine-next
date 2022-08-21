import Button from '@components/Button';
import LogoLink from '@components/LogoLink';
import { ArrowLeft } from 'iconoir-react';
import Link from 'next/link';
import styles from './AuthError.module.scss';

export default function AuthError() {
  return (
    <>
      <main className={styles.main}>
        <LogoLink />

        <div className={styles.text}>
          <h1>Oops</h1>
          <div className={styles.subtitle}>Something went wrong</div>
          <p>Please go back to the sign in page and try again.</p>
        </div>

        <Link href="/auth/signin">
          <a>
            <Button active>
              <ArrowLeft />
              Back to sign in
            </Button>
          </a>
        </Link>
      </main>
    </>
  );
}
