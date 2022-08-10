import Head from 'next/head';
import styles from './index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Seen Machine</title>
      </Head>

      <div className={styles.container}>
        <h1>Seen Machine</h1>
        <a href="/home">Home</a>
      </div>
    </>
  );
}
