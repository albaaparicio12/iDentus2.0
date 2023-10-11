import Head from 'next/head';
import styles from '../styles/Home.module.css';
import * as Icon from 'react-bootstrap-icons';
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
                <a className={styles.button_back} href='/'>&#65124; Inicio</a>
                <div className={styles.menuButtons}>
                    <Link href="/farmacos"><button> <Icon.CapsulePill name='icon' />Fármacos </button></Link>
                </div>
                <div className={styles.menuButtons}>
                    <Link href={{
                        pathname: '/lista',
                        query: { list_name: "URGENCIAS", back: '/menu', back_name: 'Menu' }
                    }}><button> <Icon.Virus name='icon' />Urgencias </button></Link>
                </div>
                <div className={styles.menuButtons}>
                    <Link href="/protocolos"><button> <Icon.JournalMedical name='icon' />Protocolos </button></Link>
                </div>
                <div className={styles.menuButtons}>
                    <Link href="/receta"><button> <Icon.Hospital name='icon' />Receta médica </button></Link>
                </div>
                <div className={styles.menuButtons}>
                    <Link href="/comerciales"><button> <Icon.Cart2 name='icon' />Casas comerciales </button></Link>
                </div>
                <div className={styles.menuButtons}>
                    <Link href="/menu"><button> <Icon.Files name='icon' />Formación de postgrado </button></Link>
                </div>
            </main>

        </div>
    );
}