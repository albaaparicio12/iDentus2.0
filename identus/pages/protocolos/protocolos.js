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
                <a className={styles.button_back} href='/menu'>&#65124; Menu</a>
                <div className={styles.farmacosButton}>
                    <Link href="/protocolos/protocolos_adultos"><button>Protocolos adultos </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href="/protocolos/protocolos_infantil"><button>Protocolos infantiles </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { list_name: "fotografia", back: "/protocolos/protocolos", back_name: "Protocolos", n_files: 4, type: "pdf" },
                    }}><button>Fotografía </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { list_name: "primeras_visitas", back: "/protocolos/protocolos", back_name: "Protocolos", n_files: 1, type: "pdf" },
                    }}><button>Primeras visitas </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { list_name: "laboratorio", back: "/protocolos/protocolos", back_name: "Protocolos", n_files: 2, type: "pdf" },
                    }}><button>Laboratorio </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { list_name: "protocolo_asignacion_finalizacion_pacientes", back: "/protocolos/protocolos", back_name: "Protocolos", n_files: 1, type: "pdf" },
                    }}><button>Protocolo asignación y finalización de pacientes </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { list_name: "firma_historias", back: "/protocolos/protocolos", back_name: "Protocolos", n_files: 1, type: "pdf" },
                    }}><button>Firma de historias / Protección de datos / Consentimiento informado (CLINIPAD) </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { list_name: "protocolo_control_tratamiento", back: "/protocolos/protocolos", back_name: "Protocolos", n_files: 1, type: "pdf" },
                    }}><button>Protocolo de control del tratamiento </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { list_name: "protocolo_esterilizacion", back: "/protocolos/protocolos", back_name: "Protocolos", n_files: 1, type: "pdf" },
                    }}><button>Protocolo de esterilización </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { list_name: "licencia_consin", back: "/protocolos/protocolos", back_name: "Protocolos", n_files: 1, type: "pdf" },
                    }}><button>Licencia ConsIn </button></Link>
                </div>
            </main>

        </div>
    );
}