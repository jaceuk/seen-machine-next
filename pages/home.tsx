import Head from 'next/head';
import TabGroup from '@components/TabGroup';
import CardVertical from '@components/CardVertical';
import trendingShows from '@data/trendingShows.json';
import trendingMovies from '@data/trendingMovies.json';
import styles from './home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Newington - Developer, Designer and Geek</title>
      </Head>

      <TabGroup
        shows={
          <>
            <h1>Recommended</h1>
            <div className={styles.results}>
              {trendingShows.results.map((show, index) => (
                <CardVertical key={index} data={show} />
              ))}
            </div>
            <h1>Watched</h1>
            <div className={styles.results}>
              {trendingShows.results.map((show, index) => (
                <CardVertical key={index} data={show} />
              ))}
            </div>
          </>
        }
        movies={
          <>
            <h1>Trending</h1>
            <div className={styles.results}>
              {trendingMovies.results.map((movie, index) => (
                <CardVertical key={index} data={movie} />
              ))}
            </div>
          </>
        }
      />
    </>
  );
}
