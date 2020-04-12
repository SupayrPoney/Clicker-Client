import React from 'react';
import Login from "../../components/login/login";
import "./homePage.scss"
import {ReactComponent as Logo} from "../../assets/header_robot.svg";

const HomePage = (props: any) => (
    <div className={"fullPage"}>
        <div className="div-center">
            <Logo className={"logo"}/>
            <div className={"container"}>
                <Login teams={props.teams} ws={props.ws}/>
            </div>
        </div>
    </div>
);

export default HomePage;