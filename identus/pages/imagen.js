import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation'
import { map } from 'react';

export default function Home() {
    const searchParams = useSearchParams()

    var n_images = searchParams.get('n_images')
    var list_name = searchParams.get('list_name')
    const back = searchParams.get('back')
    const back_name = searchParams.get('back_name')

    const imageElements = []
    for (var i = 1; i <= n_images; i++) {
        imageElements.push(
            <div className={styles.div_pic} key={i}>
                <img src={`/${list_name}${i}.png`} alt={i} style={{ top: `${(i - 1) * 700 + 70}px` }} />
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>iDentus</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <a className={styles.button_back} href={back}>&#65124; {back_name}</a>
                <div className={styles.pic_container}>
                    {imageElements}
                </div>

            </main>
        </div>
    )
}