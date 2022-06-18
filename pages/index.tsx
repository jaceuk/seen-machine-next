import Head from 'next/head';
import CardVertical from '@components/CardVertical';
import trendingShows from '@data/trendingShows.json';
import styles from './index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Newington - Developer, Designer and Geek</title>
      </Head>

      <h2>Trending TV shows</h2>
      <div className={styles.results}>
        {trendingShows.results.map((show, index) => (
          <CardVertical key={index} data={show} />
        ))}
      </div>
    </>
  );
}
