import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>iDentus</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      {/* Google tag (gtag.js) */}
      <GoogleAnalytics gaId={process.env.GA_ID} />

      <main>
        <h1 className={styles.title}>
          <img src="/identus.png" alt="Logo" />
        </h1>
        <div className={styles.mainButtons}>
          <Link href="/menu"><button className={styles.comenzar}> Comenzar </button></Link>
        </div>
        <div className={styles.mainButtons}>
          <Link href="/sugerencias"><button className={styles.sugerencias}> Buzon de sugerencias </button></Link>
        </div>
      </main>

    </div>
  );
}