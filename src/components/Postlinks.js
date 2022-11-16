import Link from 'next/link'
import groq from 'groq'
import client from '../client'

function PostLinks( { posts }) {
{posts.length > 0 && posts.map(
            ({ _id, title = '', slug = ''}) => slug && (
                <li key={_id}>
                    <Link href="/post/[slug]" as= {`/post/${slug.current}`}>
                        <a>{title}</a>
                    </Link> { '' }
                </li>
            )
          )}
    } 
export default PostLinks