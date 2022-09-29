import Head from "next/head"
import Navbar from "./Navbar"
import Header from "./Header"

import styles from "../../styles/Layout.module.scss"
import indexStyles from "../../styles/Index.module.scss"

import navButtons from "../../config/buttons"


const Layout = props => {
    const appTitle = `🏈 Feeble Minded FF`

    return (
        <>
        <div className={styles.Layout}>
            <Head>
                <title>
                🏈 Feeble Minded FF
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                </Head>
        <Header/>
        <Navbar navButtons={navButtons}/>

        
        <div className={styles.Content}>{props.children}</div>
        {/* Footer */}
        {/* You can add more stuff here later */}
        </div>
        </>
    )
}

export default Layout
// continue from this blog https://auth0.com/blog/next-js-practical-introduction-for-react-developers-part-1/