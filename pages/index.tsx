import Head from 'next/head';
import SignIn from '@components/SignIn';
import { useSession } from 'next-auth/react';
import HomePage from '@components/HomePage';
import Layout from '@components/Layout';
import LayoutSignIn from '@components/LayoutSignIn';
import CookieBanner from '@components/CookieBanner';

export default function Home() {
  const { status } = useSession();

  return (
    <>
      <Head>
        <title>Seen Machine</title>
      </Head>

      {status !== 'authenticated' && (
        <LayoutSignIn>
          <CookieBanner />
          <SignIn />
        </LayoutSignIn>
      )}

      {status === 'authenticated' && (
        <Layout>
          <HomePage />
        </Layout>
      )}
    </>
  );
}
