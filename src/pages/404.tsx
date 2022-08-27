import Head from 'next/head';
import Layout from '@components/Layout';
import ErrorPage from '@modules/Error';

export default function Error() {
  return (
    <>
      <Head>
        <title>Seen Machine - Authentication error</title>
      </Head>
      <Layout>
        <ErrorPage type="Error 404" message="This is not the page you were looking for." />
      </Layout>
    </>
  );
}
