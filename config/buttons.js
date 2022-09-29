import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faUserAstronaut,
    faToiletPaper,
    faPersonHarassing,
    faGhost
} from "@fortawesome/free-solid-svg-icons"

const navButtons = [
    {
        label: "Home",
        path: "/",
        icon: <FontAwesomeIcon icon={faUserAstronaut}/>
    },

    {
        label: "blog",
        path: "/blog",
        icon: <FontAwesomeIcon icon={faToiletPaper} />
    },
    {
        label: "About",
        path: "/about",
        icon: <FontAwesomeIcon icon={faGhost} />
    },
    {
        label: "Contact",
        path: "#contact",
        icon: <FontAwesomeIcon icon={faPersonHarassing}/>
    }

]

export default navButtons;