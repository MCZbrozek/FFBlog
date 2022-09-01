import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import sanityClient from '../client.js';
// import BlockContent from '@sanity/block-content-to-react';
import imageURLBuilder from '@sanity/image-url'

const builder = imageURLBuilder(sanityClient)
function urlFor(source) {
    return builder.image(source)
}
export default function Author() {
    const [authorData, setAuthorData] = useState(null)
    const { slug } = useParams()

    useEffect (() => {
        sanityClient.fetch(
            `*[_name == author]{
                name,
                slug,
                image{
                    asset->{
                        _id,
                        url
                    }
                },
                body,
                "name": author->name,
                "authorImage":author->image
            }`,
            { slug }
        )
        .then((data) => setAuthorData(data[0]))
        .catch(console.error);
    }, [slug] );

    if (!authorData) return <div>Loading...</div>

    return (
        <div>
            <div>
                <h2>{authorData.name}</h2>
            </div>
            <img src={urlFor(authorData.authorImage).width(100).url()}
            alt= "Author is Mike"
            />
            <p>{authorData.name}</p>
        </div>
    )

    }
    