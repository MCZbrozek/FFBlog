import Navbar from "./Navbar"
import Head from "next/head"

import styles from "../../styles/Layout.module.scss"


export default function Layout({ children }) {
    
    return (
        <>
        <div className={styles.Layout}>
            <Head>
                <title>
                    FEEBLEMINDED
                </title>
                </Head>
        <Navbar />
        
        <div className={styles.Content}>{children}</div>
        {/* Footer */}
        {/* You can add more stuff here later */}
        </div>
        </>
    )
}

// continue from this blog https://auth0.com/blog/next-js-practical-introduction-for-react-developers-part-1/