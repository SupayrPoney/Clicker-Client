import React, {Component} from 'react';
import './App.css';
import {HomePage} from "./pages/homepage/homepage";
import {InfrastructureInterface} from "./components/infrastructure/infrastructure";
import {Route, Switch} from 'react-router-dom';
import Settings from "./pages/settings/settings";

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
                    amount: 0,
                    price: 10,
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
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState((prevState) => {
                return {
                    robots: prevState.robots + 1
                }
            }
        )
    }

    infraClickHandler = (infrastructureID: number) => {
        let newInfrastructures = this.state.infrastructures;
        let infrastructureIndex = newInfrastructures.findIndex(infra => infra.id === infrastructureID);
        let infrastructure = newInfrastructures[infrastructureIndex];
        if (this.state.robots >= infrastructure.price) {
            infrastructure.amount += 1;
            this.setState((prevState) => {
                return {
                    infrastructures: newInfrastructures,
                    robots: prevState.robots - infrastructure.price
                }
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
            this.setState((prevState) => {
                    return {
                        robots: prevState.robots + robotsToAdd / 100
                    }
                }
            )
        }, 10);
    }

    render() {
        return <div>

            {/*<HomePage*/}
            {/*    robots={this.state.robots}*/}
            {/*    clickHandler={() => this.clickHandler()}*/}
            {/*    infraClickHandler={(id: number) => this.infraClickHandler(id)}*/}
            {/*    infrastructures={this.state.infrastructures}/>*/}
            <Switch>
                <Route
                    exact
                    path='/clicker-client'
                    render={(props: any) => <HomePage {...props}
                                                      robots={this.state.robots}
                                                      clickHandler={this.clickHandler}
                                                      infraClickHandler={(id: number) => this.infraClickHandler(id)}
                                                      infrastructures={this.state.infrastructures}/>}
                />
                <Route exact
                       path="/settings"
                       component={Settings}/>
            </Switch>

        </div>
    }
}

export default App;
