import groq from 'groq'
import imageURLBuilder from '@sanity/image-url'
import client from '../../src/client.js'

function urlFor (source) {
    return imageURLBuilder (client).image(source)
}

const Post = ({post}) => {
    const { 
        title = 'Missing title', 
        name = 'Missing name',
        authorImage
    } = post
    return (
        <article>
            <h1>{title}</h1>
            <span> By {name} </span>
            {authorImage && (
                <div>
                    <img
                    src={urlFor(authorImage)
                    .width(50)
                    .url()
                    }
                    />
                </div>
            )}
        </article>
    )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
title,
"name":author->name,
"authorImage": author->image
}`

export async function getStaticPaths() {
    const paths = await client.fetch(
       groq `*[_type == "post" && defined(slug.current)][].slug.current`
    )

    return {
        paths: paths.map((slug) => ({params:{slug}})), 
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const { slug = "" } = context.params
    const post = await client.fetch(query, { slug })
    return {
        props: { post }
    }
}

export default Post