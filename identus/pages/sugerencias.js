import Head from 'next/head';
import styles from '../styles/Home.module.css';
import emailjs from "@emailjs/browser";
import { useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Home() {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault() // Prevent the redirect
        sendEmail(message)
    }

    const initEmail = () => {
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    };

    const sendEmail = (message) => {
        emailjs
            .send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, {
                message: message,
            })
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    setMessage("");
                    alert("Mensaje enviado correctamente, gracias por tu colaboración");
                },
                function (error) {
                    console.log("FAILED...", error);
                    alert("Ha habido un error, inténtalo de nuevo más tarde");
                }
            );
    };

    initEmail();


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

            <div className={styles.container}>
                <a className={styles.button_back} href='/'>&#65124; Inicio</a>
                <form onSubmit={handleSubmit} method="post" className={styles.form_sugerencias}>
                    <h1>Buzón de sugerencias</h1>
                    <div className={styles.form_input_container}>
                        <textarea id="suggestion" name="suggestion" placeholder='Escribe aquí tu sugerencia anónima' required value={message} onChange={e => setMessage(e.target.value)}></textarea><br /><br />
                        <input id="message"
                            name="message" type="submit" value="Enviar" />
                    </div>

                </form>
            </div>
        </div>
    );
}
