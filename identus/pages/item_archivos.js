"use client";

import React from "react";
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { version as pdfjsVersion } from 'pdfjs-dist/package.json';
import { GoogleAnalytics } from '@next/third-parties/google'

// Dynamically import to prevent SSR (Server Side Rendering) issues
// Ya que next.js no soporta el uso de window en SSR, y react-pdf-viewer lo usa para cargar los PDFs
const Viewer = dynamic(
    () => import('@react-pdf-viewer/core').then(mod => mod.Viewer),
    { ssr: false }
);
const defaultLayoutPlugin = dynamic(
    () => import('@react-pdf-viewer/default-layout').then(mod => mod.defaultLayoutPlugin),
    { ssr: false }
);
const Worker = dynamic(
    () => import('@react-pdf-viewer/core').then(mod => mod.Worker),
    { ssr: false }
);

export default function Home() {
    const searchParams = useSearchParams();
    const type = searchParams.get('type');
    const n_files = Number(searchParams.get('n_files')) || 1;
    const list_name = searchParams.get('list_name');
    const back = searchParams.get('back');
    const back_name = searchParams.get('back_name');

    const fileElements = [];

    if (type === "img") {
        for (let i = 1; i <= n_files; i++) {
            fileElements.push(
                <div className={styles.div_pic} key={i}>
                    <Image src={`/${list_name}${i}.png`} alt={String(i)} width={600} height={800} />
                </div>
            );
        }
    } else if (type === "pdf") {
        fileElements.push(
            <div className={styles.div_pdf}>
                <PDFViewer key="pdf" list_name={list_name} n_files={n_files} />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>iDentus</title>
                <link rel="icon" href="/icon.png" />
            </Head>
            {/* Google tag (gtag.js) */}
            <GoogleAnalytics gaId={process.env.GA_ID} />
            <main>
                <a className={styles.button_back} href={back}>
                    &#65124; {back_name}
                </a>
                <div className={styles.pic_container}>{fileElements}</div>
            </main>
        </div>
    );
}

function PDFViewer({ list_name, n_files }) {
    return (// pdfjsVersion es la version de PDF.js, la libreria que usa react-pdf-viewer para mostrar PDFs. 
        // Se necesita SI o SI la version exacta para que funciones el Worker
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
            {Array.from({ length: n_files }, (_, j) => {
                const filePath = n_files > 1 ? `/${list_name}${j + 1}.pdf` : `/${list_name}.pdf`;
                return (
                    <div key={j} style={{
                        height: "600px",   // Height of the viewer
                        width: "85vw",   // 85% of the screen width
                        marginBottom: "3rem",
                    }}>
                        <Viewer fileUrl={filePath} plugins={[defaultLayoutPlugin]} key={j} />
                    </div>
                );
            })}
        </Worker>
    );
}
