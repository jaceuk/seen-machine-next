import Button from '@components/Button';
import { signIn } from 'next-auth/react';
import { ArrowRight } from 'iconoir-react';
import styles from './HomePageNoAuth.module.scss';
import HeaderNoAuth from '@components/HeaderNoAuth';

export default function HomePageNoAuth() {
  function handleClick() {
    signIn();
  }

  return (
    <div>
      <main className={styles.main}>
        <HeaderNoAuth />

        <div className={styles.text}>
          <h1>Recommend TV shows and movies to your friends</h1>
          <div className={styles.subtitle}>and keep track of what you&apos;ve watched</div>
        </div>

        <button onClick={handleClick}>
          <Button active>
            Sign in
            <ArrowRight />
          </Button>
        </button>
      </main>
    </div>
  );
}
