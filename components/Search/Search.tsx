import * as React from 'react';
import SideBar from '@components/SideBar';
import getData from './utils/getData';
import styles from './Search.module.scss';
import HeaderSearch from '@components/Search/components/HeaderSearch';
import TabGroup from '@components/TabGroup';
import Shows from './components/Shows';
import Movies from './components/Movies';

interface IProps {
  handleClose: () => void;
}

export default function Search({ handleClose }: IProps) {
  const [term, setTerm] = React.useState('');
  const [shows, setShows] = React.useState<any>([]);
  const [movies, setMovies] = React.useState<any>([]);

  async function fetchMoreShows(page: number) {
    const moreShows = await getData(shows.results, term, 'tv', page);
    setShows(moreShows);
  }

  async function fetchMoreMovies(page: number) {
    const moreMovies = await getData(movies.results, term, 'movie', page);
    setMovies(moreMovies);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (term) {
      const fetchData = async () => {
        const shows = await getData('', term, 'tv', 1);
        const movies = await getData('', term, 'movie', 1);
        setShows(shows);
        setMovies(movies);
      };
      fetchData();
    }
  }

  return (
    <SideBar handleClose={handleClose}>
      <>
        <HeaderSearch handleClose={handleClose} term={term} setTerm={setTerm} handleSubmit={handleSubmit} />
        {shows.results && movies.results && (
          <main className={styles.main}>
            <TabGroup
              totalShows={shows.totalResults}
              totalMovies={movies.totalResults}
              shows={
                <div className={styles.results}>
                  <Shows shows={shows} fetchMoreShows={fetchMoreShows} />
                </div>
              }
              movies={
                <div className={styles.results}>
                  <Movies movies={movies} fetchMoreMovies={fetchMoreMovies} />
                </div>
              }
            />
          </main>
        )}
      </>
    </SideBar>
  );
}
