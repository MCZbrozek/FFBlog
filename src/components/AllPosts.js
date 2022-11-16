import React, {useEffect, useState } from 'react';
import sanityClient  from '../client.js'
import Link from 'next/link'



export default function Allposts() {
    const [allPostsData, setAllPosts] = useState(null)

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "post"]{
                title,
                slug
            }`
        )
        .then((data) => setAllPosts(data))
        .catch(console.error);
    }, []);
    console.log(allPostsData)

    return (
    <div>
        <h2>Blog Posts</h2>
        <h3>Welcome to my blog posts page!</h3>
        <div>
            {allPostsData &&
            allPostsData.map((post, index) => (
                <Link to={'/' + post.slug.current} key={post.slug.current}>
                    <span key={index}>
                        {/* <img
                        src={post.mainImage.asset.url}
                        alt="main hero image for our blog post"
                        /> */}
                        <span>
                            <h2>{post.title}</h2>
                        </span>
                    </span>
                </Link>
            ))}
        </div>
    </div>
  );
}