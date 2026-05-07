import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link"

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
                <a className={styles.button_back} href="/menu">&#65124; Menu</a>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/lista_sustancias",
                        query: { list_name: "ANALGESICOS", back: "/farmacos", back_name: "Fármacos" }
                    }}><button>Analgésicos </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/lista_sustancias",
                        query: { list_name: "ANTIBIOTICOS", back: "/farmacos", back_name: "Fármacos" }
                    }}><button>Antibióticos </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/lista_sustancias",
                        query: { list_name: "CORTICOIDES", back: "/farmacos", back_name: "Fármacos" }
                    }}><button>Corticoides </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { list_name: "fda", back: "/farmacos", back_name: "Fármacos", n_files: 1, type: "img" },
                    }}><button>Categorías farmacológicas &#40;FDA&#41; </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/item_archivos",
                        query: { list_name: "espectro", back: "/farmacos", back_name: "Fármacos", n_files: 1, type: "img" },
                    }}><button>Espectro antibióticos </button></Link>
                </div>
            </main>
            <footer>
                <p className={styles.footer}>Toda la información ha sido obtenida del <a href="https://cima.aemps.es/">Centro de Información online de Medicamentos Autorizados.</a></p>
            </footer>

        </div>
    );
}