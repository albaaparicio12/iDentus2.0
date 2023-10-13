import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react';

const ANALGESICOS = ["PARACETAMOL", "IBUPROFENO", "NAPROXENO", "DEKETOPROXENO", "DICLOFENACO", "METAMIZOL", "TRAMADOL/PARACETAMOL"]
const ANTIBIOTICOS = ["AMOXICILINA", "AMOXICILINA/ÁCIDO CLAVULÁNICO", "CLINDAMICINA", "ESPIRAMICINA/METRONIDAZOL", "AZITROMICINA", "CIPROFLOXACINO"]
const CORTICOIDES = ["PREDNISONA", "METILPREDNISOLONA", "DEXAMETASONA"]
const URGENCIAS = ["RCP", "ATRAGANTAMIENTO", "REACCIÓN ANAFILÁCTICA", "ASMA/EPOC. BRONCOESPASMO", "ICTUS AGUDO", "IAM", "HIPOGLUCEMIA", "PRESINCOPE/SINCOPE", "CRISIS CONVULSIVA"]
const lists = { "ANALGESICOS": ANALGESICOS, "ANTIBIOTICOS": ANTIBIOTICOS, "CORTICOIDES": CORTICOIDES, "URGENCIAS": URGENCIAS }

export default function Home() {

    const searchParams = useSearchParams()
    const back = searchParams.get('back')
    const back_name = searchParams.get('back_name')
    var list = searchParams.get('list_name')
    var list_names = lists[list]

    /*
        Barra de búsqueda
    */
    const [search, setSearch] = useState("");
    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    var search_names = list_names.filter((name) => {
        return (name.toUpperCase().includes(search.toUpperCase())) || (search == "")
    });

    const page_names = []
    for (var i = 0; i < search_names.length; i++) {
        page_names.push(
            <div key={i}>
                <Link href={{
                    pathname: "/item",
                    query: {
                        page_name: search_names[i],
                        back: back,
                        back_name: back_name,
                    }
                }}><button className={styles.item_lista}>{search_names[i]}</button></Link>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>iDentus</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className={styles.top_bar}>
                    <a className={styles.button_back} href={back}>&#65124; {back_name}</a>
                    <div className={styles.search_bar}><input id="search_bar" type="text" value={search} placeholder='Escribe aquí...' onChange={handleChange} /></div>
                </div>
                <div className={styles.lista_items}>
                    {page_names}
                </div>
            </main>
        </div >
    )
}
