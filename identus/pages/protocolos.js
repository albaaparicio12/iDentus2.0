import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link'

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
                <a className={styles.button_back} href='/menu'>&#65124; Menu</a>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/imagen",
                        query: { back: "/protocolos", back_name: "Protocolos", n_images: 5, list_name: "antiagregado" },
                    }}><button>Paciente antiagregado </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/imagen",
                        query: { back: "/protocolos", back_name: "Protocolos", n_images: 4, list_name: "anticoagulado" },
                    }}><button>Paciente anticoagulado </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/imagen",
                        query: { back: "/protocolos", back_name: "Protocolos", n_images: 2, list_name: "cardioepata" },
                    }}><button>Paciente cardiópata </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/imagen",
                        query: { back: "/protocolos", back_name: "Protocolos", n_images: 2, list_name: "diabetico" },
                    }}><button>Paciente diabético </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/imagen",
                        query: { back: "/protocolos", back_name: "Protocolos", n_images: 4, list_name: "endocarditis" },
                    }}><button>Endocarditis bacteriana </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: "/imagen",
                        query: { back: "/protocolos", back_name: "Protocolos", n_images: 2, list_name: "inmunodeficiencia" },
                    }}><button>Paciente con inmunodeficiencias </button></Link>
                </div>
            </main>

        </div>
    );
}