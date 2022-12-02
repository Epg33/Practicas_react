import style from '../styles/app.module.css'
import Head from "next/head"

export default function PageLayout ({ children, title = 'NewsApp' }) {
  return (<>
    <Head>
        <title>{title}</title>
        <meta name="description" content="newsapp - the best app to read news" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={style.header}>NewsApi</header>
    <main>
      {children}
    </main>
    </>
  )
}