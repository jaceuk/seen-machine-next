import Head from 'next/head';
import styles from './index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Seen Machine</title>
      </Head>

      <div className={styles.container}>
        <h1>Recommend TV shows and movies to your friends</h1>
        <div>and keep track of what you’ve watched</div>
        <a href="/home">Home</a>
        <a href="/account/create">Create account</a>
        <a href="/account/sign-in">Sign in</a>
      </div>
    </>
  );
}
