import React, { useEffect, useState } from 'react';
import { SanityClient } from '@sanity/client';

export default function Onepost() {
    const [postData, setPostData] = useState(null)
    useEffect (() => {
        SanityClient.fetch(
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