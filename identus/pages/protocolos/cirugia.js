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
                        query: { back: "/protocolos/cirugia", back_name: "Cirugía", list_name: "adultos_cirugia1", n_files: 1, type: "pdf" },
                    }}><button>Catálogo de Forceps DEF </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/cirugia", back_name: "Cirugía", list_name: "adultos_cirugia2", n_files: 1, type: "pdf" },
                    }}><button>Catálogo de instrumental </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/cirugia", back_name: "Cirugía", list_name: "adultos_cirugia3", n_files: 1, type: "pdf" },
                    }}><button>Protocolo osteonecrosis </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/cirugia", back_name: "Cirugía", list_name: "adultos_cirugia4", n_files: 1, type: "pdf" },
                    }}><button>Recomendaciones post extracción </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/cirugia", back_name: "Cirugía", list_name: "adultos_cirugia5", n_files: 1, type: "pdf" },
                    }}><button>Tecnica de exodoncia simple </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/cirugia", back_name: "Cirugía", list_name: "adultos_cirugia6", n_files: 1, type: "pdf" },
                    }}><button>Tecnica exodoncia (Antiagregado/Anticoagulado) </button></Link>
                </div>
            </main>

        </div>
    );
}