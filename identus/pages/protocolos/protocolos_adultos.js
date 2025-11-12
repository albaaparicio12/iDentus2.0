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
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <a className={styles.button_back} href='/protocolos/protocolos'>&#65124; Protocolos</a>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/protocolos_adultos", back_name: "Protocolos Adultos", list_name: "adultos_cirugia", n_files: 6, type: "pdf" },
                    }}><button>Cirugía </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href="/protocolos/conservadora"><button>Conservadora </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/protocolos_adultos", back_name: "Protocolos Adultos", list_name: "adultos_endodoncia", n_files: 1, type: "pdf" },
                    }}><button>Endodoncia </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/protocolos_adultos", back_name: "Protocolos Adultos", list_name: "adultos_flujo_digital", n_files: 1, type: "pdf" },
                    }}><button>Flujo digital </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/protocolos_adultos", back_name: "Protocolos Adultos", list_name: "adultos_periodoncia", n_files: 6, type: "pdf" },
                    }}><button>Periodoncia </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/protocolos_adultos", back_name: "Protocolos Adultos", list_name: "adultos_protesis", n_files: 3, type: "pdf" },
                    }}><button>Protesis </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/protocolos_adultos", back_name: "Protocolos Adultos", list_name: "adultos_urgencias_medicas", n_files: 1, type: "pdf" },
                    }}><button>Urgencias Médicas en Clínica Dental </button></Link>
                </div>
            </main>

        </div>
    );
}