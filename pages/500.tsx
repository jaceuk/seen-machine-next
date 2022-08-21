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
        <ErrorPage type="Error 500" message="This is usually as problem at our end. Please try again." />
      </LayoutNoAuth>
    </>
  );
}
