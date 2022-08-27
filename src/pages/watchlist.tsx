import Head from 'next/head';
import { getSession, useSession } from 'next-auth/react';
import Layout from '@components/Layout';
import WatchList from '@modules/WatchList';

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
            <WatchList />
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
