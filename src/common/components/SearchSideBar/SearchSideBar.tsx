import * as React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import SideBar from '@components/SideBar';
import getData from './utils/getData';
import styles from './SearchSideBar.module.scss';
import SearchHeader from './components/SearchHeader';
import TabGroup from '@components/TabGroup';
import Shows from './components/Shows';
import Movies from './components/Movies';
import Alert from '@components/Alert';

interface IProps {
  handleClose: () => void;
}

export default function SearchSideBar({ handleClose }: IProps) {
  const [term, setTerm] = React.useState('');
  const [shows, setShows] = React.useState<any>([]);
  const [movies, setMovies] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasApiError, setHasApiError] = React.useState(false);

  async function fetchMoreShows(page: number) {
    setHasApiError(false);
    setIsLoading(true);

    const moreShows = await getData(shows.results, term, 'tv', page);

    if (!moreShows) {
      setHasApiError(true);
      setIsLoading(false);
      return;
    }

    setShows(moreShows);
    setIsLoading(false);
  }

  async function fetchMoreMovies(page: number) {
    setHasApiError(false);
    setIsLoading(true);

    const moreMovies = await getData(movies.results, term, 'movie', page);

    if (!moreMovies) {
      setHasApiError(true);
      setIsLoading(false);
      return;
    }

    setMovies(moreMovies);
    setIsLoading(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (term) {
      const fetchData = async () => {
        setHasApiError(false);
        setIsLoading(true);

        const shows = await getData('', term, 'tv', 1);
        const movies = await getData('', term, 'movie', 1);

        if (!shows || !movies) {
          setHasApiError(true);
          setIsLoading(false);
          return;
        }

        setShows(shows);
        setMovies(movies);
        setIsLoading(false);
      };
      fetchData();
    }
  }

  return (
    <SideBar handleClose={handleClose}>
      <>
        <SearchHeader handleClose={handleClose} term={term} setTerm={setTerm} handleSubmit={handleSubmit} />

        {hasApiError && (
          <main className={styles.main}>
            <Alert type="error">There was a problem retrieving your results, please try again.</Alert>
          </main>
        )}

        {!hasApiError && shows.results && movies.results && (
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

            {isLoading && (
              <div className={styles.loading}>
                <MoonLoader size={24} color="#ff0000" /> Loading ...
              </div>
            )}
          </main>
        )}
      </>
    </SideBar>
  );
}
