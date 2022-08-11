import Head from 'next/head';
import { default as HomePage } from '@components/HomePage';

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
