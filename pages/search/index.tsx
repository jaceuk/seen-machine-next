import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import SearchForm from '@components/SearchForm/SearchForm';

export default function Home() {
  const router = useRouter();
  const [results, setResults] = React.useState([]);

  const term = router.query.q || '';

  async function getData() {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=6356a51ba0311540ab85aa34624d0e3e&query=${term}`,
    );
    const data = await response.json();

    if (response.ok) return data.results;

    throw new Error(data.status_message);
  }

  React.useEffect(() => {
    if (term) {
      const fetchData = async () => {
        const data = await getData();
        console.log(data);
        setResults(data);
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

      <div className="results">
        {results.map((result, index) => (
          <p key={index}>{result.name}</p>
        ))}
      </div>
    </>
  );
}
