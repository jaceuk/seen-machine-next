import Head from 'next/head';
import HomeLoggedOut from '@components/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Seen Machine</title>
      </Head>

      <HomeLoggedOut />
    </>
  );
}
