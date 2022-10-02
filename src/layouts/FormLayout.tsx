import { PropsWithChildren } from 'react';
import Head from 'next/head';
import styles from '../styles/FormLayout.module.css';


export default function FormLayout({ children } : PropsWithChildren<{}> ) {    
    return (
        <>
            <Head>
                <title>GraphStax - Workwolf</title>
                <meta name="description" content="GraphStax" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.app}>
                <main className={styles.content}>
                    {children}
                </main>
            </div>
            
        </>
    )
}