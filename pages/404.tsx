import Head from 'next/head';
import LayoutNoAuth from '@components/LayoutNoAuth';
import ErrorPage from '@components/ErrorPage';

export default function Error() {
  return (
    <>
      <Head>
        <title>Seen Machine - Authentication error</title>
      </Head>
      <LayoutNoAuth>
        <ErrorPage type="Error 404" message="This is not the page you were looking for." />
      </LayoutNoAuth>
    </>
  );
}
