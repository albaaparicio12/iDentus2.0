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
                        pathname: '/imagen',
                        query: { back: '/menu', back_name: 'Menu', pic_route: '/antiagregado.png', pic_alt: 'Paciente antiagregado', stylePic: "large_pic_object" },
                    }}><button>Paciente antiagregado </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: '/imagen',
                        query: { back: '/menu', back_name: 'Menu', pic_route: '/anticoagulado.png', pic_alt: 'Paciente anticoagulado', stylePic: "large_pic_object" },
                    }}><button>Paciente anticoagulado </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: '/imagen',
                        query: { back: '/menu', back_name: 'Menu', pic_route: '/cardiopata.png', pic_alt: 'Paciente cardiopata', stylePic: "large_pic_object" },
                    }}><button>Paciente cardiópata </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: '/imagen',
                        query: { back: '/menu', back_name: 'Menu', pic_route: '/diabetico.png', pic_alt: 'Paciente diabético', stylePic: "large_pic_object" },
                    }}><button>Paciente diabético </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: '/imagen',
                        query: { back: '/menu', back_name: 'Menu', pic_route: '/endocarditis.png', pic_alt: 'Paciente endocarditis', stylePic: "large_pic_object" },
                    }}><button>Endocarditis bacteriana </button></Link>
                </div>
                <div className={styles.farmacosButton}>
                    <Link href={{
                        pathname: '/imagen',
                        query: { back: '/menu', back_name: 'Menu', pic_route: '/inmunodeficiencias.png', pic_alt: 'Paciente con inmunodeficiencias', stylePic: "large_pic_object" },
                    }}><button>Paciente con inmunodeficiencias </button></Link>
                </div>
            </main>

        </div>
    );
}