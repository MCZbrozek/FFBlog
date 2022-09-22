import Head from "next/head"
import React from "react"
import Layout from "../src/components/Layout"

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
           )
}

export default MyApp