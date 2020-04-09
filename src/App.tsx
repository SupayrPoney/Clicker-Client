import React, {Component} from 'react';
import './App.css';
import {Clicker} from "./components/clicker/clicker";

interface AppProps {

}

interface AppState {
    robots: number
}


class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            robots: 0
        };
    }

    clickHandler() {
        this.setState({
            robots: this.state.robots + 1
        })
    }


    render() {
        return (
            <div>
                <h1 className={"App-header"}>Robot amount: {this.state.robots}</h1>
                <Clicker clickHandler={() => this.clickHandler()}/>
            </div>
        );
    }
}

export default App;
