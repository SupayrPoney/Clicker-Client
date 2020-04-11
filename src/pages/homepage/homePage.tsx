import React from 'react';
import {Header} from "../../components/header/header";
import Login from "../../components/login/login";
import "./homePage.scss"

const HomePage = (props: any) => (
    <div>
        <Header/>
        <hr/>
        <div className={"container"}>
            <h1 id="left">{props.teams[0]}</h1>
            <Login id="center"/>
            <h1 id="right">{props.teams[1]}</h1>
        </div>
    </div>
);

export default HomePage;