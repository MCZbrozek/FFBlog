import Navbar from "./Navbar"
import Head from "next/head"

import styles from "../../styles/Layout.module.scss"
import indexStyles from "../../styles/Index.module.scss"


export default function Layout({ children }) {
    const appTitle = `🏈 Feeble Minded FF`

    return (
        <>
        <div className={styles.Layout}>
            <Head>
                <title>
                🏈 Feeble Minded FF
                </title>
                </Head>
        <Navbar appTitle={appTitle}/>
        
        <div className={styles.Content}>{children}</div>
        {/* Footer */}
        {/* You can add more stuff here later */}
        </div>
        </>
    )
}

// continue from this blog https://auth0.com/blog/next-js-practical-introduction-for-react-developers-part-1/