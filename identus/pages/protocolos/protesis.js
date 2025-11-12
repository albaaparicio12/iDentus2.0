import Head from 'next/head';
import styles from '/styles/Home.module.css';
import Link from 'next/link'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>iDentus</title>
                <link rel="icon" href="/icon.png" />
            </Head>

            <main>
                <a className={styles.button_back} href='/protocolos/protocolos_adultos'>&#65124; Protocolos Adultos</a>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/protesis", back_name: "Protesis", list_name: "adultos_protesis1", n_files: 1, type: "pdf" },
                    }}><button>Protocolo de protesis completas Uniovi </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/protesis", back_name: "Protesis", list_name: "adultos_protesis2", n_files: 1, type: "pdf" },
                    }}><button>Protocolo de protesis fija </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/protesis", back_name: "Protesis", list_name: "adultos_protesis3", n_files: 1, type: "pdf" },
                    }}><button>Protocolo de protesis parcial removible </button></Link>
                </div>
            </main>

        </div>
    );
}