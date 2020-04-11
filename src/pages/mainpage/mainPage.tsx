import React from "react";
import numeral from "numeral-es6";
import {Clicker} from "../../components/clicker/clicker";
import InfrastructureList from "../../components/infrastructure/infrastructureList";
import {InfrastructureInterface} from "../../components/infrastructure/infrastructure";
import {Header} from "../../components/header/header";

interface PropsInterface {
    infrastructures: InfrastructureInterface[],
    infraClickHandler: any,
    clickHandler: any,
    robots: number
}

export const MainPage = (props: PropsInterface) => {

    return <div>
        <Header/>
        <h1 className={"App-header"}>Robot
            amount: {numeral(Math.floor(props.robots)).format('0.00 a')}</h1>
        <Clicker clickHandler={() => props.clickHandler()}/>
        <hr/>
        <InfrastructureList infrastructures={props.infrastructures}
                            infraClickHandler={(infraId: number) => props.infraClickHandler(infraId)}
                            amountRobots={props.robots}
        />
    </div>;
}