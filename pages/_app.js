import Head from "next/head"
import React from "react"
import Layout from "../src/components/Layout"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
           )
}

export default MyApp