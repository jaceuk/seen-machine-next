import Head from 'next/head';
import Layout from '@components/Layout';
import VerifyRequest from '@components/VerifyRequest';

export default function VerifyRequestPage() {
  return (
    <>
      <Head>
        <title>Seen Machine - Sign in</title>
      </Head>
      <Layout>
        <VerifyRequest />
      </Layout>
    </>
  );
}
