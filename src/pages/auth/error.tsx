import Head from 'next/head';
import Layout from '@components/Layout';
import AuthError from '@modules/AuthError';

export default function Error() {
  return (
    <>
      <Head>
        <title>Seen Machine - Authentication error</title>
      </Head>
      <Layout>
        <AuthError />
      </Layout>
    </>
  );
}
