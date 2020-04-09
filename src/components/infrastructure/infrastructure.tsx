import React from "react";
import "./infrastructure.css"

export interface InfrastructureInterface {
    name: string,
    amount: number,
    id: number,
    price: number,
    income: number
}

export const Infrastructure = ({infrastructure, infraClickHandler}: { infrastructure: InfrastructureInterface, infraClickHandler: any }) => {

    return <div className={"infrastructure"} onClick={() => infraClickHandler(infrastructure.id)}>
        <img className={"ratio-kept"} src={"https://robohash.org/C" + infrastructure.id + "?set=set4"}
             alt={"InfrastructureImage"}/>
        <h1>{infrastructure.name}</h1>
        <p>{infrastructure.amount}</p>
        <p>{"Costs " + infrastructure.price}</p>
    </div>
}