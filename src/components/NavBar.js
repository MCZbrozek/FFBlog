import { useRouter } from "next/router"
import Link from "next/link"

import styles from "../../styles/Navbar.module.scss"


export default function Navbar(props) {
    const navigationRoutes = ['home', 'post','about', 'contact']
    const router = useRouter()
    return (
        <nav className={styles.Navbar} > 
        <Link href="/">
            <div>{props.appTitle}</div>
        </Link>
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