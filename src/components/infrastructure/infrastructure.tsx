import React from "react";
import "./infrastructure.css"

export interface InfrastructureInterface {
    name: string,
    amount: number,
    id: number,
    price: number,
    income: number
}

export const Infrastructure = ({infrastructure, infraClickHandler, amountRobots}: { infrastructure: InfrastructureInterface, infraClickHandler: any, amountRobots: number }) => {

    return <div className={"infrastructure " + (amountRobots >= infrastructure.price ? "affordable" : "unaffordable")}
                onClick={() => infraClickHandler(infrastructure.id)}


    >
        <img className={"ratio-kept"} src={"https://robohash.org/C" + infrastructure.id + "?set=set4"}
             alt={"InfrastructureImage"}/>
        <h1>{infrastructure.name}</h1>
        <p>{infrastructure.amount}</p>
        <p>{"Costs " + infrastructure.price}</p>
    </div>
}