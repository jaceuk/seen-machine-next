import Head from 'next/head';
import ResetPassword from '@components/ResetPassword';

export default function Home() {
  return (
    <>
      <Head>
        <title>Seen Machine</title>
      </Head>

      <ResetPassword />
    </>
  );
}
