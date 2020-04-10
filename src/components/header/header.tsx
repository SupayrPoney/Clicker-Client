import React from "react";
import {Link} from "react-router-dom";

import {ReactComponent as Logo} from "../../assets/header_robot.svg";

import './header.scss'

export const Header = () => (
    <div className={"header"}>
        <Link to="/clicker-client" className={"logo-container"}>
            <Logo className={"logo"}/>
        </Link>
        <Link to="/settings" className={"options"}>
            <a className={"option"}>Options</a>
        </Link>
    </div>
)