import Navbar from "./Navbar"

export default function Layout({ children }) {
    
    return (
        <>
        <Navbar />
        <main>{children}</main>
        {/* Footer */}
        {/* You can add more stuff here later */}
        </>
    )
}