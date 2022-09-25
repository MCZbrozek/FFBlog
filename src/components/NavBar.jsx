import { useRouter } from "next/router"
import Link from "next/link"

const navigationRoutes = ['home', 'about', 'posts', 'contact']
const navBarStyle = {
    backgroundColor: "#52673C",
    color: "#D5D5D3",
    width: "100%",
    height: "60px"
}

export default function Navbar() {
    const router = useRouter()
    return (
        <nav className="nav_container" style={navBarStyle}>
            {navigationRoutes.map((singleRoute) => {
                return (
                    <NavigationLink
                        key={singleRoute}
                        href={`/${singleRoute}`}
                        text={singleRoute}
                        router={router}
                        />
                )
            })}
        </nav>
    )
}

function NavigationLink({ href, text, router }) {
    const isActive = router.asPath === (href === "/home" ? "/" : href)
    return (
        <Link href={href = "/home" ? "/" : href} passHref>
            <a
                href={href === "/home" ? "/" :href}
                className={`${isActive && "nav_item_active"} nav_item`}>
                    <span>{text}</span>
                </a>
        </Link>
    )
}