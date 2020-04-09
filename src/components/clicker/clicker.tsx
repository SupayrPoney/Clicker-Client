import React from "react";
import "./clicker.css"

export const Clicker = ({clickHandler}: { clickHandler: any }) => {
    return <img className="clicker" src="https://robohash.org/2" onClick={clickHandler} alt={"Clicker"}/>
};