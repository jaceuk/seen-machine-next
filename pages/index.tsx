import Head from 'next/head';
import HomePageNoAuth from '@components/HomePageNoAuth';
import { useSession } from 'next-auth/react';
import HomePage from '@components/HomePage';
import Layout from '@components/Layout';
import LayoutNoAuth from '@components/LayoutNoAuth';
import CookieBanner from '@components/CookieBanner';

export default function Home() {
  const { data: session, status } = useSession();

  console.log(session);

  return (
    <>
      <Head>
        <title>Seen Machine</title>
      </Head>

      {status !== 'authenticated' && (
        <LayoutNoAuth>
          <CookieBanner />
          <HomePageNoAuth />
        </LayoutNoAuth>
      )}

      {status === 'authenticated' && (
        <Layout>
          <HomePage />
        </Layout>
      )}
    </>
  );
}
