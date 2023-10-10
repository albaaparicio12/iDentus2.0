import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation'


export default function Home() {
    const searchParams = useSearchParams()

    const pic_route = searchParams.get('pic_route')
    const pic_alt = searchParams.get('pic_alt')
    const back = searchParams.get('back')
    const back_name = searchParams.get('back_name')
    const stylePic = searchParams.get('stylePic')

    return (
        <div className={styles.container}>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>iDentus</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <a className={styles.button_back} href={back}>&#65124; {back_name}</a>
                <div className={styles[stylePic]}>
                    <Image src={pic_route} alt={pic_alt} fill />
                </div>
            </main>
        </div>
    )
}