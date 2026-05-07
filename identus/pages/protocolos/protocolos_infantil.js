import Head from 'next/head';
import Link from 'next/link'
import styles from '/styles/Home.module.css';

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
                <a className={styles.button_back} href='/protocolos/protocolos'>&#65124; Protocolos</a>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/protocolos_infantil", back_name: "Protocolos Infantil", list_name: "infantil_cirugia", n_files: 1, type: "pdf" },
                    }}><button>Cirugía </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href="/protocolos/conservadora_infantil"><button>Conservadora </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/protocolos_infantil", back_name: "Protocolos Infantil", list_name: "infantil_mantenedor_espacio", n_files: 2, type: "pdf" },
                    }}><button>Mantenedor de espacio </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/protocolos_infantil", back_name: "Protocolos Infantil", list_name: "infantil_preventiva", n_files: 3, type: "pdf" },
                    }}><button>Preventiva </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/protocolos_infantil", back_name: "Protocolos Infantil", list_name: "infantil_tratamiento_pulpar", n_files: 1, type: "pdf" },
                    }}><button>Tratamiento Pulpar </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/protocolos_infantil", back_name: "Protocolos Infantil", list_name: "infantil_traumatismos", n_files: 1, type: "pdf" },
                    }}><button>Traumatismos </button></Link>
                </div>
            </main>

        </div>
    );
}