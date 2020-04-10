import React, {Component} from "react";
import numeral from "numeral-es6";
import {Clicker} from "../../components/clicker/clicker";
import InfrastructureList from "../../components/infrastructure/infrastructureList";
import {InfrastructureInterface} from "../../components/infrastructure/infrastructure";

interface PropsInterface {
    infrastructures: InfrastructureInterface[],
    infraClickHandler: any,
    clickHandler: any,
    robots: number
}

export class HomePage extends Component<PropsInterface> {

    render() {
        return <div>
            <h1 className={"App-header"}>Robot
                amount: {numeral(Math.floor(this.props.robots)).format('0.00 a')}</h1>
            <Clicker clickHandler={() => this.props.clickHandler()}/>
            <hr/>
            <InfrastructureList infrastructures={this.props.infrastructures}
                                infraClickHandler={(infraId: number) => this.props.infraClickHandler(infraId)}
                                amountRobots={this.props.robots}
            />
        </div>;
    }
}