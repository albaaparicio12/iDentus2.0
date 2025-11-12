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
                        query: { back: "/protocolos/periodoncia", back_name: "Periodoncia", list_name: "adultos_periodoncia1", n_files: 1, type: "pdf" },
                    }}><button>Protocolo de mantenimiento periodontal </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/periodoncia", back_name: "Periodoncia", list_name: "adultos_periodoncia2", n_files: 1, type: "pdf" },
                    }}><button>Protocolo de RAR </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/periodoncia", back_name: "Periodoncia", list_name: "adultos_periodoncia3", n_files: 1, type: "pdf" },
                    }}><button>Protocolo de reevaluación periodontal </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/periodoncia", back_name: "Periodoncia", list_name: "adultos_periodoncia4", n_files: 1, type: "pdf" },
                    }}><button>Protocolo Diagnóstico EP </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/periodoncia", back_name: "Periodoncia", list_name: "adultos_periodoncia5", n_files: 1, type: "pdf" },
                    }}><button>Protocolo Educación higiene oral </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { back: "/protocolos/periodoncia", back_name: "Periodoncia", list_name: "adultos_periodoncia6", n_files: 1, type: "pdf" },
                    }}><button>Periodontograma </button></Link>
                </div>
            </main>

        </div>
    );
}