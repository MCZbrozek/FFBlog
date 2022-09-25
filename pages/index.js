import Link from 'next/link'
import groq from 'groq'
import client from '../src/client.js'
import Layout from '../src/components/Layout.jsx'

const Index = ({posts}) => {
    return (
        <div>
           <Layout> Welcome to the Feeble Minded Footbal Fantasy Home! </Layout>
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
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`
    *[_type == "post"] `)
    return {
        props: {
            posts
        }
    }
}

export default Index; 