import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/cardList/cardList";
import {SearchBox} from "./components/searchbox/searchBox";

interface AppProps {

}

interface User {
    id: string,
    name: string,
    username: string,
    address: Object,
    phone: string,
    website: string,
    email: string
}

interface AppState {
    monsters: User[],
    searchField: string,
    nextId: number
}


class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            monsters: [],
            nextId: 11,
            searchField: ""
        };
    }


    addMonster(): void {
        const monster = {
            id: this.state.nextId.toString(),
            name: "Test Monster",
            username: "usrname",
            address: "",
            phone: "string",
            website: "string",
            email: "string"
        };
        this.setState({
            monsters: this.state.monsters.concat(monster),
            nextId: this.state.nextId + 1
        });
    }

    componentDidMount(): void {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(r => r.json())
            .then(json => this.setState({monsters: json}));
    }

    render() {
        return (
            <div className="App">
                <button onClick={() => this.addMonster()}>Add Monster</button>
                <SearchBox placeHolder="Search Monster"
                           changeHandler={(event: any) => this.setState({searchField: event.target.value})}/>
                <CardList monsters={this.state.monsters} searchField={this.state.searchField}/>
            </div>

        );
    }
}

export default App;
