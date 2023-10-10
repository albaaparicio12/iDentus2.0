import Head from 'next/head';
import styles from '../styles/Farmacos.module.css';

export default function Farmacos() {
    return (
        <div className={styles.container}>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>iDentus</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <a className={styles.button_back} href='/menu'>&#65124; Menu</a>
                <div className={styles.menuButtons}>
                    <button>Analgésicos </button>
                </div>
                <div className={styles.menuButtons}>
                    <button>Antibióticos </button>
                </div>
                <div className={styles.menuButtons}>
                    <button>Corticoides </button>
                </div>
                <div className={styles.menuButtons}>
                    <button>Categorías farmacológicas &#40;FDA&#41; </button>
                </div>
                <div className={styles.menuButtons}>
                    <button>Espectro antibióticos </button>
                </div>
            </main>

        </div>
    );
}