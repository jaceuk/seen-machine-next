import Head from 'next/head';
import CreateAccount from '@components/CreateAccount';

export default function Home() {
  return (
    <>
      <Head>
        <title>Seen Machine</title>
      </Head>

      <CreateAccount />
    </>
  );
}
