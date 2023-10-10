import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>iDentus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          <img src="/identus.png" alt="Logo" />
        </h1>
        <div className={styles.mainButtons}>
          <button className={styles.comenzar}> Comenzar </button>
        </div>
        <div className={styles.mainButtons}>
          <button className={styles.sugerencias}> Buzon de sugerencias </button>
        </div>
      </main>

    </div>
  );
}