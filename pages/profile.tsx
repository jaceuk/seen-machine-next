import * as React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { useSession } from 'next-auth/react';
import HeaderProfile from '@components/HeaderProfile';
import Layout from '@components/Layout';

export default function Home() {
  const { data: session } = useSession();

  React.useEffect(() => {
    if (!session) Router.push('/');
  }, []);

  return (
    <>
      {session && (
        <>
          <Head>
            <title>Seen Machine - Profile</title>
          </Head>

          <Layout>
            <HeaderProfile />

            <main>
              <a href="/">Loading page</a>
            </main>
          </Layout>
        </>
      )}
    </>
  );
}
