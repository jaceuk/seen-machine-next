import Head from 'next/head';
import LayoutNoAuth from '@components/LayoutNoAuth';
import AuthError from '@components/AuthError';

export default function Error() {
  return (
    <>
      <Head>
        <title>Seen Machine - Authentication error</title>
      </Head>
      <LayoutNoAuth>
        <AuthError />
      </LayoutNoAuth>
    </>
  );
}
