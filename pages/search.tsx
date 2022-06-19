import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import SearchForm from '@components/SearchForm';
import TabGroup from '@components/TabGroup';
import CardHorizontal from '@components/CardHorizontal';
import styles from './Search.module.css';
import InfiniteScroll from 'react-infinite-scroller';

export default function Home() {
  const router = useRouter();
  const [shows, setShows] = React.useState<any>([]);
  const [movies, setMovies] = React.useState<any>([]);

  const term = router.query.q;

  async function getData(prevResults: any, term: string | string[], type: string, page: number) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/${type}?api_key=6356a51ba0311540ab85aa34624d0e3e&query=${term}&page=${page}`,
    );
    const data = await response.json();

    if (response.ok) {
      const results = [...prevResults, ...data.results];

      return {
        status: response.status,
        page: data.page,
        totalPages: data.total_pages,
        totalResults: data.total_results,
        results: results,
      };
    }

    throw new Error(data.status_message);
  }

  async function fetchMoreShows(page: number) {
    const moreShows = await getData(shows.results, term, 'tv', page);
    setShows(moreShows);
  }

  async function fetchMoreMovies(page: number) {
    const moreMovies = await getData(movies.results, term, 'movie', page);
    setMovies(moreMovies);
  }

  React.useEffect(() => {
    if (term) {
      const fetchData = async () => {
        const shows = await getData('', term, 'tv', 1);
        const movies = await getData('', term, 'movie', 1);
        setShows(shows);
        setMovies(movies);
      };
      fetchData();
    }
  }, [term]);

  return (
    <>
      <Head>
        <title>Jason Newington - Developer, Designer and Geek</title>
      </Head>

      <SearchForm />

      {shows.results && movies.results && (
        <main className={styles.main}>
          <TabGroup
            totalShows={shows.totalResults}
            totalMovies={movies.totalResults}
            shows={
              <InfiniteScroll
                pageStart={1}
                loadMore={fetchMoreShows}
                hasMore={shows.page < shows.totalPages}
                loader={
                  <div className="loader" key={0}>
                    Loading ...
                  </div>
                }
                className={styles.results}
              >
                <div className={styles.results}>
                  {shows.results.map((result, index) => (
                    <CardHorizontal key={index} data={result} />
                  ))}
                </div>
              </InfiniteScroll>
            }
            movies={
              <InfiniteScroll
                pageStart={1}
                loadMore={fetchMoreMovies}
                hasMore={movies.page < movies.totalPages}
                loader={
                  <div className="loader" key={0}>
                    Loading ...
                  </div>
                }
                className={styles.results}
              >
                {movies.results.map((result, index) => (
                  <CardHorizontal key={index} data={result} />
                ))}
              </InfiniteScroll>
            }
          />
        </main>
      )}
    </>
  );
}
