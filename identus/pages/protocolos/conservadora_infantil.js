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
                <a className={styles.button_back} href='/protocolos/protocolos_infantil'>&#65124; Protocolos Infantil</a>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/conservadora_infantil", back_name: "Conservadora", list_name: "infantil_conservadora1", n_files: 1, type: "pdf" },
                    }}><button>Aislamiento odontopediatria </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/conservadora_infantil", back_name: "Conservadora", list_name: "infantil_conservadora2", n_files: 1, type: "pdf" },
                    }}><button>Protocolo de operatoria en odontopediatria </button></Link>
                </div>
            </main>

        </div>
    );
}