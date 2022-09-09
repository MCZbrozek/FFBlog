import Link from 'next/link'
import sanityClient from "@sanity/client"


const Index = ({posts}) => {
    return (
        <div>
            <h1> This is Mikes fantasy blog </h1>
            {posts.length > 0 && posts.map(
                ({_id, title = '', slug = '', publishedAt = ''}) =>
            slug && (
                <li key={_id}>
                    <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                        <a>{title}</a>
                    </Link> {''}
                    ({new Date(publishedAt).toDateString()})
                </li>
            )
            )}
        </div>
    )
}

export async function getStaticProps() {
    const posts = await sanityClient.fetch(`
    *[type == "post" && publishedAt < now()]|order(publishedAt desc)`)
    return {
        props: {
            posts
        }
    }
}