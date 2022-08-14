import Button from '@components/Button';
import Link from 'next/link';
import styles from './Home.module.scss';

export default function Home() {
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
        <Link href="/account/sign-in">
          <a>
            <Button>Sign in</Button>
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
