import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <meta charSet='utf-8' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>iDentus</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <a className={styles.button_back} href='/menu'>&#65124; Menu</a>
                <div className={styles.comercialButton}>
                    <a href='https://www.oralbprofessional.es'><button ><Image src={"/oralb.png"} alt='Oral B' width={180} height={90} priority></Image></button></a>
                </div>
                <div className={styles.comercialButton}>
                    <a href='https://www.dentaid.es/'><button><Image src={"/dentaid.png"} alt='Dentaid' width={180} height={90} priority></Image></button></a>
                </div>
                <div className={styles.comercialButton}>
                    <a href='https://www.haleonhealthpartner.com/'><button><Image src={"/haleon.png"} alt='Haleon' width={70} height={50} priority></Image></button></a>
                </div>

            </main>

        </div>
    );
}