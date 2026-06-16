
import styles from '../styles/Home.module.css';
import { GoogleAnalytics } from '@next/third-parties/google'

export default function MyApp({ Component, pageProps }) {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    return (
        <>
            <Component {...pageProps} />
            {/* Solo renderiza el componente si la variable gaId existe */}
            {gaId && <GoogleAnalytics gaId={gaId} />}
        </>
    )
}