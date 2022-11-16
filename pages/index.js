import Link from 'next/link'
import groq from 'groq'
import client from '../src/client.js'
import Layout from '../src/components/Layout.js'
import PostLinks from '../src/components/Postlinks.js'

const Index = ({posts}) => {
    return (
        <>
        <Layout>
        <div>
           <h1> Welcome to the Feeble Minded Football Fantasy Home! </h1>
           {posts.length > 0 && posts.map(
            ({ _id, title = '', slug = ''}) => slug && (
                <li key={_id}>
                    <Link href="/post/[slug]" as= {`/post/${slug.current}`}>
                        <a>{title}</a>
                    </Link> { '' }
                </li>
            )
           )}
        </div>
        </Layout>
        </>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`
    *[_type == "post"] `)
    return {
        props: { posts }
    }
}

export default Index; 