import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>iDentus</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <a className={styles.button_back} href="/menu">&#65124; Menu</a>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/lista",
                        query: { list_name: "ANALGESICOS", back: "/farmacos", back_name: "Fármacos" }
                    }}><button>Analgésicos </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/lista",
                        query: { list_name: "ANTIBIOTICOS", back: "/farmacos", back_name: "Fármacos" }
                    }}><button>Antibióticos </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/lista",
                        query: { list_name: "CORTICOIDES", back: "/farmacos", back_name: "Fármacos" }
                    }}><button>Corticoides </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/imagen",
                        query: { back: "/farmacos", back_name: "Fármacos", n_images: 1, list_name: "fda", stylePics: "narrow_pic_object" },
                    }}><button>Categorías farmacológicas &#40;FDA&#41; </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/imagen",
                        query: { back: "/farmacos", back_name: "Fármacos", n_images: 1, list_name: "espectro", stylePics: "large_pic_object" },
                    }}><button>Espectro antibióticos </button></Link>
                </div>
            </main>
            <footer>
                <p className={styles.footer}>Toda la información ha sido obtenida del <a href="https://cima.aemps.es/">Centro de Información online de Medicamentos Autorizados.</a></p>
            </footer>

        </div>
    );
}