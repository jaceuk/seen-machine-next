import Head from 'next/head';
import SignIn from '@components/SignIn';
import { useSession } from 'next-auth/react';
import HomePage from '@components/HomePage';
import Layout from '@components/Layout';
import LayoutSignIn from '@components/LayoutSignIn';
import CookieBanner from '@components/CookieBanner';
import Loading from '@components/Loading';

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <>
      <Head>
        <title>Seen Machine</title>
      </Head>

      {status === 'loading' && <Loading />}

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
