import groq from 'groq'
import imageURLBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import client from '../../src/client.js'
import styles from '../../styles/Posts.module.scss'

function urlFor (source) {
    return imageURLBuilder (client).image(source)
}

const ptComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                <img className={styles.mainImage}
                alt={value.alt || ''}
                loading="lazy"
                src={urlFor(value)}
                />
            )
        }
    }
}

const Post = ({post}) => {
    const { 
        title = 'Missing title', 
        name = 'Missing name',
        authorImage,
        body
    } = post
    return (
        <article className={styles.main}>
            <h1>{title}</h1>
            {authorImage && (
                <div>
                    <img 
                    src={urlFor(authorImage)
                    .width(100)
                    .url()
                    }
                    />
                </div>
            )}
            <span> By: {name} </span>
            <PortableText className={styles.body}
            value = {body}
            components={ptComponents}
            />
        </article>
    )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
title,
"name":author->name,
"authorImage": author->image,
body
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