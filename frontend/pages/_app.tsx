import { AppProps } from 'next/app';
import Head from 'next/head';
import "../styles/style.css";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App;
