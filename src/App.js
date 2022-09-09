import React from 'react';
import { Link } from "react-router-dom"

export default function App () {
    return (
        <div>
            <h1>This is my app dammit!!</h1>
            <nav style={{
                borderBottom: "1px solid",
                paddingBottom: "1rem"
            }}>
                <Link to="/Onepost">One post</Link> | {" "}
                <Link to="/Allposts">All posts</Link> | {" "}
                <Link to= "/author">Author</Link>          
            </nav>
        </div>
    )
}
