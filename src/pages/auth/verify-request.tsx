import Head from 'next/head';
import Layout from '@components/Layout';
import VerifyRequest from '@modules/VerifyRequest';

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
