import {Layout} from '@components/Layout';
import {globalStyles} from '@globalCss';
import type {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
  globalStyles();
  return (
    <Layout header footer>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
