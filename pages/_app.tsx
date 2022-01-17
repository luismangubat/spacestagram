import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Spacestagram" />
        <meta property="og:description" content="A Next.js web application that pulls images from NASA's (APOD) Astronomy Picture of the Day API." />
        <meta name="theme-color" content="#002F2E"/>
          <title>Spacetagram</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
};

export default MyApp;
