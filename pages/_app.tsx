import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import LayoutMain from '@components/LayoutMain';
import Layout from '@components/Layout';
import '@styles/vars.css';
import '@styles/normalize.css';
import '@styles/reset.css';
import '@styles/typography.scss';
import '@styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.startsWith('/search')) {
    return (
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    );
  }

  if (router.pathname.startsWith('/profile')) {
    return (
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    );
  }

  return (
    <LayoutMain>
      <Component {...pageProps} />
    </LayoutMain>
  );
}
