import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>iDentus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          <img src="/identus.png" alt="Logo" />
        </h1>
        <div className={styles.mainButtons}>
          <Link href="/menu"><button className={styles.comenzar}> Comenzar </button></Link>
        </div>
        <div className={styles.mainButtons}>
          <button className={styles.sugerencias}> Buzon de sugerencias </button>
        </div>
      </main>

    </div>
  );
}