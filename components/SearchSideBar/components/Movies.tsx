import CardHorizontal from '@components/CardHorizontal';
import { useInView } from 'react-cool-inview';

interface MoviesProps {
  movies: any;
  fetchMoreMovies: (page: number) => Promise<void>;
}

export default function Movies({ movies, fetchMoreMovies }: MoviesProps) {
  const { observe } = useInView({
    // For better UX, we can grow the root margin so the data will be loaded earlier
    rootMargin: '50px 0px',
    // When the last item comes to the viewport
    onEnter: ({ unobserve }) => {
      // Pause observe when loading data
      unobserve();
      // Load more data
      fetchMoreMovies(movies.page + 1);
    },
  });

  return (
    <>
      {movies.results.map((result, index) => (
        <div key={index} ref={index === movies.results.length - 1 ? observe : null}>
          <CardHorizontal data={result} />
        </div>
      ))}
    </>
  );
}
