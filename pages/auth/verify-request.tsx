import Head from 'next/head';
import LayoutNoAuth from '@components/LayoutNoAuth';
import VerifyRequest from '@components/VerifyRequest';

export default function VerifyRequestPage() {
  return (
    <>
      <Head>
        <title>Seen Machine - Sign in</title>
      </Head>
      <LayoutNoAuth>
        <VerifyRequest />
      </LayoutNoAuth>
    </>
  );
}
