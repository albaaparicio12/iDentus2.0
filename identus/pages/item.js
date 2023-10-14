import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import farmacosData from './data_structured/farmacos.json';
import urgenciasData from './data_structured/urgencias.json';


export default function Home() {

    const searchParams = useSearchParams()
    const back = searchParams.get('back')
    const back_name = searchParams.get('back_name')
    const page_name = searchParams.get('page_name')
    const type_page = searchParams.get('type_page')
    const data = type_page == "URGENCIAS" ? urgenciasData.objetos : farmacosData.objetos;
    const item = data.find(item => item.titulo === page_name);

    return (
        <div className={styles.container}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>iDentus</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Link className={styles.button_back} href={back}>&#65124; {capitalize(type_page.toLowerCase())}</Link>
                {writePage(type_page, item)}
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
            {writeList(posologia_adultos)}
            <h3>Niños:</h3>
            {writeList(posologia_niños)}
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
            <div>
                <h2>Notas: </h2>
                <p>{notas}</p>
            </div>
        );
    }
}

function writeList(list) {
    if (list != null && list.length > 0) {
        return (
            list.map((item) => (
                <p>{item}</p>
            )))
    }
}

function writePage(type_page, item) {
    if (type_page == "URGENCIAS") {
        return writeUrgencias(item);
    } else {
        return writeFarmacos(item);
    }
}

function writeFarmacos(item) {
    return (
        <div className={styles.item}>
            <h1>{item.titulo}</h1>
            <div className={styles.item_info}>
                <h2>Posología:</h2>
                {writePosologia(item.posologia)}
            </div>
            <div className={styles.item_info}>
                <h2>Efectos secundarios:</h2>
                {writeList(item.efectossecundarios)}
            </div>
            <div className={styles.item_info}>
                <h2>Embarazo y lactancia:</h2>
                <p>{item.embarazo}</p>
            </div>
            <div className={styles.item_info}>
                <h2>Presentaciones comerciales:</h2>
                {writePresentacionesComerciales(item.presentacionescomerciales)}
            </div>
            <div className={styles.item_info}>
                {writeNotas(item.nota)}
            </div>
        </div>
    )
}

function writeUrgencias(item) {
    return (
        <div className={styles.item}>
            <h1>{item.titulo}</h1>
            <div>
                {writeList(item.precontent)}
            </div>
            <div className={styles.urgencias_content}>
                {writeUrgenciasContent(item.content)}
            </div>
            <div className={styles.urgencias_postcontent}>
                {writePostContent(item.postcontent)}
            </div>
        </div>
    )
}

function writeUrgenciasContent(content) {
    if (content != null & content.length > 0) {
        return (
            content.map((item, index) => (
                <div>
                    <ul name="urgencias">
                        {typeof item === 'object' && !Array.isArray(item) ? (
                            <li key={"content" + { index }}>
                                {item.nivel1}
                                <ol key="urgencias-nivel1">
                                    {item.nivel2.map((item2, index) => (
                                        Array.isArray(item2) ? (
                                            <ol key="urgencias-nivel2">
                                                {item2.map((item3, index) => (
                                                    <li key={"content3" + { index }}>{item3}</li>
                                                ))}
                                            </ol>
                                        ) : (
                                            <li key={"content2" + { index }}>{item2}</li>
                                        )
                                    ))}
                                </ol>
                            </li>
                        ) : (
                            <li key={"content" + { index }}>{item}</li>
                        )}
                    </ul>
                </div>
            ))
        );
    }
}


function writePostContent(content) {
    if (content != null && content.length > 0) {
        return (
            content.map((item) => (
                <div className={styles.div_pic}>
                    {item.length == 1 ? (
                        <img src={`/urgencias${item}.png`} alt="Urgencias" />
                    ) : (<p>{item}</p>)
                    }
                </div>
            ))
        );
    }
}


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}