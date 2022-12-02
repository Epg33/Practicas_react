import Head from 'next/head'
import '../styles/globals.css'
import style from '../styles/app.module.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
        <title>News App</title>
        <meta name="description" content="newsapp - the best app to read news" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={style.header}>NewsApi</header>
    <main>
      <Component {...pageProps} />
    </main>
  </>
}

export default MyApp
