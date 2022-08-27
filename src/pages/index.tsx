import Head from 'next/head';
import HomePageNoAuth from '@modules/HomeNoAuth';
import { useSession } from 'next-auth/react';
import HomePage from '@modules/Home';
import Layout from '@components/Layout';
import CookieBanner from '@components/CookieBanner';

export default function Home() {
  const { status } = useSession();

  return (
    <>
      <Head>
        <title>Seen Machine</title>
      </Head>

      <Layout>
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
