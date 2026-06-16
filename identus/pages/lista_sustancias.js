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
    /*
        lista generalizada de sustancias
    */

    const searchParams = useSearchParams()
    const back = searchParams.get('back')
    const back_name = searchParams.get('back_name')
    const list = searchParams.get('list_name')
    const list_names = lists[list]

    /*
        Barra de búsqueda
    */
    const [search, setSearch] = useState("");
    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    if (list_names != null) {
        var search_names = list_names.filter((name) => {
            return (name.toUpperCase().includes(search.toUpperCase())) || (search == "")
        });
    } else {
        var search_names = []
    }

    const page_names = []
    for (var i = 0; i < search_names.length; i++) {
        page_names.push(
            <div className={styles.item_div} key={i}>
                <Link href={{
                    pathname: "/item",
                    query: {
                        page_name: search_names[i],
                        back: window.location.href,
                        type_page: list
                    }
                }}><button className={styles.item_button}>{search_names[i]}</button></Link> {/* window.location.href para volver a la url con unos searchparams específicos. Sólo funciona con link, con <a> no. */}
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>iDentus</title>
                <link rel="icon" href="/icon.png" />
            </Head>

            <main>
                <div className={styles.top_bar}>
                    <a className={styles.button_back} href={back}>&#65124; {back_name}</a>
                    <div className={styles.search_bar}><input id="search_bar" type="text" value={search} placeholder='Escribe aquí...' onChange={handleChange} /></div>
                </div>
                <div className={styles.lista_items_div}>
                    {page_names}
                </div>
            </main>
        </div >
    )
}
