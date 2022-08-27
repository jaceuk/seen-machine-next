export default async function fetchData(prevResults: any, term: string | string[], type: string, page: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/${type}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${term}&page=${page}`,
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
