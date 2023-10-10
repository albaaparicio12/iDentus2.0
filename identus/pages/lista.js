import Image from 'next/image'

export default function List(list_names) {
    return (
        <div className={styles.container}>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>iDentus</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Image
                    src={pic_route}
                    alt={pic_alt}
                />
            </main>
        </div >
    )
}