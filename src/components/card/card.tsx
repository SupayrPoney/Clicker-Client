import React from "react";
import "./card.css"

interface CardProps {
    monster: Monster
}

interface Monster {
    id: string,
    name: string,
    email: string,
    username: string,
    address: Object,
    phone: string,
    website: string
}

export const Card = (props: CardProps) => {
    return <div className="card-container">
        <img alt="Robot" src={"https://robohash.org/" + props.monster.id}/>
        <h1> {props.monster.name}</h1>
        <p> {props.monster.email}</p>
    </div>
};