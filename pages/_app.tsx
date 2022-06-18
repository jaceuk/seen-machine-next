import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '@components/Layout';
import LayoutSearch from '@components/LayoutSearch';
import '@styles/vars.css';
import '@styles/normalize.css';
import '@styles/reset.css';
import '@styles/typography.scss';
import '@styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.startsWith('/search')) {
    return (
      <LayoutSearch>
        <Component {...pageProps}></Component>
      </LayoutSearch>
    );
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
