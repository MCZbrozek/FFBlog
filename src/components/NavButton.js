import Link from "next/link";

import styles from "../../styles/NavButton.module.scss"

const NavButton = props => (
    <Link href={props.path}>
        <div className="styles.NavButton">
            <div className="Icon">{props.icon}</div>
            <span className="Label">{props.label}</span>
        </div>
    </Link>
)

export default NavButton