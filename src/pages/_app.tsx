import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '@styles/vars.css';
import '@styles/normalize.css';
import '@styles/reset.css';
import '@styles/typography.scss';
import '@styles/global.scss';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps}></Component>
    </SessionProvider>
  );
}
