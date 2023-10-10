import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Head from 'next/head';


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
                <a className={styles.button_back} href="/menu">&#65124; Menu</a>
                <div className={styles.receta_medica}>
                    <Image src="/receta_medica.png" alt="Formulario receta médica" width={380} height={300} />
                    <Image src="/receta_medica2.png" alt="Instrucciones" width={380} height={300} />
                </div>
            </main>
        </div>
    )
}