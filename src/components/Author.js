import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
// import BlockContent from '@sanity/block-content-to-react';
import imageURLBuilder from '@sanity/image-url'

const builder = imageURLBuilder(sanityClient)
function urlFor(source) {
    return builder.image(source)
}
export default function Author() {
    const [authorData, setAuthorData] = useState(null)
   
    useEffect (() => {
        sanityClient.fetch(
            `*[_type == "author"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body,
                "name": author->name,
                "authorImage":author->image
            }`
        )
        .then((data) => setAuthorData(data))
        .catch(console.error);
    }, [] );

    if (!authorData) return <div>Loading...</div>
    console.log (authorData)
    return (
        <div>
            <div>
                <h2>{authorData.name}</h2>
            </div>
            <img src={urlFor(authorData.authorImage).width(100).url()}
            alt= "Author is Mike"
            />
            <h4>{authorData.name}</h4>
        </div>
    )

    }
    