import CardHorizontal from '@components/CardHorizontal';
import { useInView } from 'react-cool-inview';

interface Props {
  shows: any;
  fetchMoreShows: (page: number) => Promise<void>;
}

export default function Shows({ shows, fetchMoreShows }: Props) {
  const { observe } = useInView({
    // For better UX, we can grow the root margin so the data will be loaded earlier
    rootMargin: '50px 0px',
    // When the last item comes to the viewport
    onEnter: ({ unobserve }) => {
      // Pause observe when loading data
      unobserve();
      // Load more data
      fetchMoreShows(shows.page + 1);
    },
  });

  return (
    <>
      {shows.results.map((result, index) => (
        <div key={index} ref={index === shows.results.length - 1 ? observe : null}>
          <CardHorizontal data={result} />
        </div>
      ))}
    </>
  );
}
