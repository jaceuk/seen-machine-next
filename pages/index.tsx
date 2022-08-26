import Head from 'next/head';
import HomePageNoAuth from '@components/HomePageNoAuth';
import { useSession } from 'next-auth/react';
import HomePage from '@components/HomePage';
import Layout from '@components/Layout';
import CookieBanner from '@components/CookieBanner';

export default function Home() {
  const { status } = useSession();

  return (
    <>
      <Head>
        <title>Seen Machine</title>
      </Head>

      <Layout auth={status === 'authenticated'}>
        {status !== 'authenticated' && (
          <>
            <CookieBanner />
            <HomePageNoAuth />
          </>
        )}
        {status === 'authenticated' && <HomePage />}
      </Layout>
    </>
  );
}
