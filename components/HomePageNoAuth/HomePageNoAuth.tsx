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
    <main className={`no-auth main ${styles.main}`}>
      <HeaderNoAuth />

      <div className="text">
        <h1>Recommend TV shows and movies to your friends</h1>
        <div className="subtitle">and keep track of what you&apos;ve watched</div>
      </div>

      <button onClick={handleClick}>
        <Button active>
          Sign in
          <ArrowRight />
        </Button>
      </button>
    </main>
  );
}
