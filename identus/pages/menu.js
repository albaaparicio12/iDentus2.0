import Head from 'next/head';
import styles from '../styles/Menu.module.css';
import * as Icon from 'react-bootstrap-icons';

export default function Menu() {
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
                    <button> <Icon.CapsulePill name='icon' />Fármacos </button>
                </div>
                <div className={styles.menuButtons}>
                    <button> <Icon.Virus name='icon' />Urgencias </button>
                </div>
                <div className={styles.menuButtons}>
                    <button> <Icon.JournalMedical name='icon' />Protocolos </button>
                </div>
                <div className={styles.menuButtons}>
                    <button> <Icon.Hospital name='icon' />Receta médica </button>
                </div>
                <div className={styles.menuButtons}>
                    <button> <Icon.Cart2 name='icon' />Casas comerciales </button>
                </div>
                <div className={styles.menuButtons}>
                    <button> <Icon.Files name='icon' />Formación de postgrado </button>
                </div>
            </main>

        </div>
    );
}