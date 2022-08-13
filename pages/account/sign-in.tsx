import Head from 'next/head';
import SignIn from '@components/SignIn';

export default function Home() {
  return (
    <>
      <Head>
        <title>Seen Machine</title>
      </Head>

      <SignIn />
    </>
  );
}
