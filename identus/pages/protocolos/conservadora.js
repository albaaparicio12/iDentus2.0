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
            {/* Google tag (gtag.js) */}
            <GoogleAnalytics gaId={process.env.GA_ID} />

            <main>
                <a className={styles.button_back} href='/protocolos/protocolos_adultos'>&#65124; Protocolos Adultos</a>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/conservadora", back_name: "Conservadora", list_name: "aislamiento_adultos", n_files: 1, type: "pdf" },
                    }}><button>Aislamiento adultos </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/conservadora", back_name: "Conservadora", list_name: "blanqueamiento", n_files: 1, type: "pdf" },
                    }}><button>Blanqueamiento </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/conservadora", back_name: "Conservadora", list_name: "caries", n_files: 1, type: "pdf" },
                    }}><button>Caries </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/conservadora", back_name: "Conservadora", list_name: "poste_fibra", n_files: 1, type: "pdf" },
                    }}><button>Poste fibra de vidrio </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/conservadora", back_name: "Conservadora", list_name: "terapia_pulpar_vital", n_files: 1, type: "pdf" },
                    }}><button>Terapia Pulpar Vital </button></Link>
                </div>
            </main>

        </div>
    );
}