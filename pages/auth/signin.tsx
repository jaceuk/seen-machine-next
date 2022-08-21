import Head from 'next/head';
import LayoutNoAuth from '@components/LayoutNoAuth';
import SignIn from '@components/SignIn';
import { getCsrfToken, getSession } from 'next-auth/react';

interface SignInPageProps {
  csrfToken: string;
}

export default function SignInPage({ csrfToken }: SignInPageProps) {
  return (
    <>
      <Head>
        <title>Seen Machine - Sign in</title>
      </Head>
      <LayoutNoAuth>
        <SignIn csrfToken={csrfToken} />
      </LayoutNoAuth>
    </>
  );
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      csrfToken,
    },
  };
}
