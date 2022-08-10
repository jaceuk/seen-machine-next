import TabGroup from '@components/TabGroup';
import CardVertical from '@components/CardVertical';
import trendingShows from '@data/trendingShows.json';
import trendingMovies from '@data/trendingMovies.json';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <TabGroup
      shows={
        <>
          <h1 className={styles.title}>Recommended</h1>
          <div className={styles.subtext}>Your friends thought you might like these</div>
          <div className={styles.results}>
            {trendingShows.results.map((show, index) => (
              <CardVertical key={index} data={show} />
            ))}
          </div>

          <h1 className={styles.title}>Watched</h1>
          <div className={styles.subtext}>Your watched these recently</div>
          <div className={styles.results}>
            {trendingMovies.results.map((movie, index) => (
              <CardVertical key={index} data={movie} />
            ))}
          </div>

          <h1 className={styles.title}>Watch list</h1>
          <div className={styles.subtext}>You added these to your watch list recently</div>
          <div className={styles.results}>
            {trendingShows.results.map((show, index) => (
              <CardVertical key={index} data={show} />
            ))}
          </div>
        </>
      }
      movies={
        <>
          <h1 className={styles.title}>Trending</h1>
          <div className={styles.results}>
            {trendingMovies.results.map((movie, index) => (
              <CardVertical key={index} data={movie} />
            ))}
          </div>
        </>
      }
    />
  );
}
