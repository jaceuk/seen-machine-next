import TabGroup from '@components/TabGroup';
import CardVertical from '@components/CardVertical';
import trendingShows from '@data/trendingShows.json';
import trendingMovies from '@data/trendingMovies.json';
import styles from './HomePage.module.scss';
import Title from '@components/Title';

export default function HomePage() {
  return (
    <div>
      <Title title="Recommended" subtext="Your friends thought you might like these" />

      <TabGroup
        shows={
          <>
            <div className={styles.results}>
              {trendingShows.results.map((show, index) => (
                <CardVertical key={index} data={show} />
              ))}
            </div>
          </>
        }
        movies={
          <>
            <div className={styles.results}>
              {trendingMovies.results.map((movie, index) => (
                <CardVertical key={index} data={movie} />
              ))}
            </div>
          </>
        }
      />
    </div>
  );
}
