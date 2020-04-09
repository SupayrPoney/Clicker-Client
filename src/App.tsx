import React, {Component} from 'react';
import './App.css';
import {Clicker} from "./components/clicker/clicker";
import InfrastructureList from "./components/infrastructure/infrastructureList";
import {InfrastructureInterface} from "./components/infrastructure/infrastructure";
import numeral from 'numeral-es6';

interface AppProps {

}


interface AppState {
    robots: number,
    infrastructures: InfrastructureInterface[]
}

class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            robots: 0,
            infrastructures: [
                {
                    id: 0,
                    name: "Factory",
                    amount: 1,
                    price: 100,
                    income: 10
                },
                {
                    id: 1,
                    name: "City",
                    amount: 0,
                    price: 1000,
                    income: 100
                },
                {
                    id: 2,
                    name: "Region",
                    amount: 0,
                    price: 10000,
                    income: 1000
                }
            ]
        };
    }


    clickHandler() {
        this.setState({
            robots: this.state.robots + 1
        })
    }

    infraClickHandler = (infrastructureID: number) => {
        let infrastructures = this.state.infrastructures;
        let infrastructureIndex = infrastructures.findIndex(infra => infra.id === infrastructureID);
        let infrastructure = infrastructures[infrastructureIndex];
        if (this.state.robots >= infrastructure.price) {
            infrastructure.amount += 1;
            this.setState({
                infrastructures: infrastructures,
                robots: this.state.robots - infrastructure.price
            });
            infrastructure.price = Math.floor(1.1 * infrastructure.price);
        }


    };

    componentDidMount(): void {
        setInterval(() => {
            let robotsToAdd = 0;
            for (let infra of this.state.infrastructures) {
                robotsToAdd += infra.amount * infra.income;
            }
            this.setState({
                robots: this.state.robots + robotsToAdd / 100
            })
        }, 10);
    }

    render() {
        return (
            <div>
                <h1 className={"App-header"}>Robot
                    amount: {numeral(Math.floor(this.state.robots)).format('0.00 a')}</h1>
                <Clicker clickHandler={() => this.clickHandler()}/>
                <hr/>
                <InfrastructureList infrastructures={this.state.infrastructures}
                                    infraClickHandler={this.infraClickHandler}
                                    amountRobots={this.state.robots}
                />
            </div>
        );
    }
}

export default App;
