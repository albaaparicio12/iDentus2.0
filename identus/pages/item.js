import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import jsonData from './data_structured/farmacos.json';


export default function Home() {

    const searchParams = useSearchParams()
    const back = searchParams.get('back')
    const back_name = searchParams.get('back_name')
    const page_name = searchParams.get('page_name')
    const data = jsonData.objetos;
    const item = data.find(item => item.titulo === page_name);

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
                <div>
                    <h1>{item.titulo}</h1>
                    <h2>Posología:</h2>
                    <p>{writePosologia(item.posologia)}</p>
                    <h2>Efectos secundarios:</h2>
                    <p>{writeList(item.efectossecundarios)}</p>
                    <h2>Embarazo y lactancia:</h2>
                    <p>{item.embarazo}</p>
                    <h2>Presentaciones comerciales:</h2>
                    <p>{writePresentacionesComerciales(item.presentacionescomerciales)}</p>
                    <p>{writeNotas(item.nota)}</p>
                </div>
            </main>
        </div >
    )
}

function writePosologia(posologia) {
    var posologia_adultos = posologia.adultos
    var posologia_niños = posologia.ninos
    return (
        <div>
            <h3>Adultos:</h3>
            <p>{writeList(posologia_adultos)}</p>
            <h3>Niños:</h3>
            <p>{writeList(posologia_niños)}</p>
        </div>
    )

}

function writePresentacionesComerciales(presentacionescomerciales) {
    if (presentacionescomerciales != null) {
        return (
            presentacionescomerciales.map((prestacion) => (
                <div>
                    <h3>{prestacion.titulo}:</h3>
                    {prestacion.pres.map((pre) => (
                        <p>- {pre}</p>
                    ))}
                </div>
            ))
        );
    }
}

function writeNotas(notas) {
    if (notas != null && notas.length > 0) {
        return (
            <p>{notas}</p>
        );
    }
}

function writeList(list) {
    if (list != null) {
        return (
            list.map((item) => (
                <p>{item}</p>
            )))
    }
}
