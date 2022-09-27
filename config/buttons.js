import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faCompass,
    faMapMarkerAlt,
    faUser,
    faShoppingCart
} from "@fortawesome/free-solid-svg-icons"

const navButtons = [
    {
        label: "Home",
        path: "/",
        icon: <FontAwesomeIcon icon={faCompass}/>
    },

    {
        label: "blog",
        path: "/blog",
        icon: <FontAwesomeIcon icon={faMapMarkerAlt} />
    },
    {
        label: "About",
        path: "/about",
        icon: <FontAwesomeIcon icon={faShoppingCart} />
    },
    {
        label: "Contact",
        path: "#contact",
        icon: <FontAwesomeIcon icon={faUser}/>
    }

]

export default navButtons;