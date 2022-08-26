import Head from 'next/head';
import Layout from '@components/Layout';
import ErrorPage from '@components/ErrorPage';

export default function Error() {
  return (
    <>
      <Head>
        <title>Seen Machine - Authentication error</title>
      </Head>
      <Layout>
        <ErrorPage type="Error 500" message="This is usually as problem at our end. Please try again." />
      </Layout>
    </>
  );
}
