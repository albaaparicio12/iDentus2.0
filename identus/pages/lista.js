import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react';

const ANALGESICOS = ["PARACETAMOL", "IBUPROFENO", "NAPROXENO", "DEKETOPROXENO", "DICLOFENACO", "METAMIZOL", "TRAMADOL/PARACETAMOL"]
const ANTIBIOTICOS = ["AMOXICILINA", "AMOXICILINA/ÁCIDO CLAVULÁNICO", "CLINDAMICINA", "ESPIRAMICINA/METRONIDAZOL", "AZITROMICINA", "CIPROFLOXACINO"]
const CORTICOIDES = ["PREDNISONA", "METILPREDNISOLONA", "DEXAMETASONA"]
const lists = { "ANALGESICOS": ANALGESICOS, "ANTIBIOTICOS": ANTIBIOTICOS, "CORTICOIDES": CORTICOIDES }

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
                <input type="text" value={search} onChange={handleChange} />
                {search_names.map((name, index) => (
                    <div key={index}>
                        <button className={styles.item_lista}>{name}</button>
                    </div>
                ))}
            </main>
        </div >
    )
}