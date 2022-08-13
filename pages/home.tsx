import Head from 'next/head';
import { default as HomePage } from '@components/HomeMain';

export default function Home() {
  return (
    <>
      <Head>
        <title>Seen Machine</title>
      </Head>

      <HomePage />
    </>
  );
}
