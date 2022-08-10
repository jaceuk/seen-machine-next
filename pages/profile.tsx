import Head from 'next/head';
import HeaderProfile from '@components/HeaderProfile';

export default function Home() {
  return (
    <>
      <Head>
        <title>Seen Machine - Profile</title>
      </Head>

      <HeaderProfile />

      <main>
        <a href="/">Loading page</a>
      </main>
    </>
  );
}
