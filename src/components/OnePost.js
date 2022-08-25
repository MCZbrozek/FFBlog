import React, { useEffect, useState } from 'react';
import {sanityClient} from '../client.js';

export default function Onepost() {
    const [postData, setPostData] = useState(null)
    useEffect (() => {
        sanityClient.fetch(
            `*[slug.current == $slug]{
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

    })
    return <h2>Single post page</h2>
}