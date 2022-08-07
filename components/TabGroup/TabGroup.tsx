import * as React from 'react';
import styles from './TabGroup.module.scss';

interface IProps {
  shows: any;
  movies: any;
  totalShows?: number;
  totalMovies?: number;
}

export default function TabGroup({ shows, movies, totalShows = 0, totalMovies = 0 }: IProps) {
  const [selectedTab, setSelectedTab] = React.useState(1);

  return (
    <>
      <div className={styles.tablist} role="tablist" aria-orientation="horizontal">
        <button
          className={`${styles.button}`}
          onClick={() => setSelectedTab(1)}
          role="tab"
          aria-selected={selectedTab === 1 ? 'true' : 'false'}
          id="tv-tab"
          aria-controls="tv-content-panel"
        >
          <span>TV shows</span>
          {totalShows > 0 && <span className={styles.count}>&nbsp;({totalShows})</span>}
        </button>

        <button
          className={styles.button}
          onClick={() => setSelectedTab(2)}
          role="tab"
          aria-selected={selectedTab === 2 ? 'true' : 'false'}
          id="movies-tab"
          aria-controls="movies-content-panel"
        >
          <span>Movies</span>
          {totalMovies > 0 && <span className={styles.count}>&nbsp;({totalMovies})</span>}
        </button>
      </div>

      {selectedTab === 1 && (
        <div id="tv-content-panel" role="tabpanel" aria-labelledby="tv-tab">
          {shows}
        </div>
      )}

      {selectedTab === 2 && (
        <div id="movies-content-panel" role="tabpanel" aria-labelledby="movies-tab">
          {movies}
        </div>
      )}
    </>
  );
}
