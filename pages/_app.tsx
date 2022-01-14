import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Spacetagram</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
