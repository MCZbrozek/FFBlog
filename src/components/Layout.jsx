import Navbar from "./Navbar"

const layoutstyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%"
}

const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column"
}

export default function Layout({ children }) {
    
    return (
        <>
        <div className="Layout" style={layoutstyle}>
        <Navbar />
        
        <div className="Content" style={contentStyle}>{children}</div>
        {/* Footer */}
        {/* You can add more stuff here later */}
        </div>
        </>
    )
}

// continue from this blog https://auth0.com/blog/next-js-practical-introduction-for-react-developers-part-1/