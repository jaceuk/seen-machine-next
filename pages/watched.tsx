import * as React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { useSession } from 'next-auth/react';
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
            <title>Seen Machine - Watched</title>
          </Head>
          <Layout>Watched</Layout>
        </>
      )}
    </>
  );
}
