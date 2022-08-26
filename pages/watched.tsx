import Head from 'next/head';
import { getSession, useSession } from 'next-auth/react';
import Layout from '@components/Layout';
import Watched from '@components/Watched';

export default function Home() {
  const { status } = useSession();

  return (
    <>
      {status === 'authenticated' && (
        <>
          <Head>
            <title>Seen Machine - Watched</title>
          </Head>
          <Layout>
            <Watched />
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
