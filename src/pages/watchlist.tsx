import Head from 'next/head';
import { getSession, useSession } from 'next-auth/react';
import Layout from '@components/Layout';
import List from '@modules/WatchList';

export default function Home() {
  const { status } = useSession();

  return (
    <>
      {status === 'authenticated' && (
        <>
          <Head>
            <title>Seen Machine - Watch list</title>
          </Head>
          <Layout>
            <List />
          </Layout>
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
