import Head from 'next/head';
import HeaderProfile from '@components/HeaderProfile';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Newington - Developer, Designer and Geek</title>
      </Head>

      <HeaderProfile />

      <main>
        <a href="/home">Loading page</a>
      </main>
    </>
  );
}
