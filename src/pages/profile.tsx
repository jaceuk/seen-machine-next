import Head from 'next/head';
import { getSession, useSession } from 'next-auth/react';
import useSWR from 'swr';
import Layout from '@components/Layout';
import Profile from '@modules/Profile';

export default function Home() {
  const { status } = useSession();

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR('/api/users', fetcher);
  if (error) return <div>An error occured.</div>;
  if (!data) return <div>Loading ...</div>;

  return (
    <>
      {status === 'authenticated' && (
        <>
          <Head>
            <title>Seen Machine - Watched</title>
          </Head>
          <Layout>
            <Profile />
            {data.map((user) => (
              <p key={user.id}>{user.id}</p>
            ))}
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
