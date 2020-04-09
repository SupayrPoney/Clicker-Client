import React from "react";
import "./cardList.css";
import {Card} from "../card/card";

interface User {
    id: string,
    name: string,
    username: string,
    address: Object,
    phone: string,
    website: string,
    email: string
}

export const CardList = (props: any) => {
    return <div className="card-list">{
        props.monsters.filter((monster: User) => monster.name.includes(props.searchField)).map((monster: User) =>
            <Card monster={monster}
                  key={monster.id}/>
        )}
    </div>
};