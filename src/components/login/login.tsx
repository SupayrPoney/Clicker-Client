import React from 'react';
import "./login.scss"
import LoginInput from "./loginInput";

class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: "",
            team: this.props.teams[0]
        }
    }

    private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(event);
        let msg = {
            type: "join_request",
            payload:
                {
                    username: this.state.username,
                    team: this.state.team

                }
        };
        (this.props.ws as WebSocket).send(JSON.stringify(msg));
        this.setState({
            username: "",
            team: ""
        })
    }

    private handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={event => this.handleSubmit(event)}>
                    <LoginInput
                        handleChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event)}
                        label={"Username"}
                        value={this.state.username}
                        name="username"
                        required/>
                    <select
                        value={this.state.team}
                        name="team"
                        onChange={event => this.handleChange(event)}
                    >
                        {
                            this.props.teams.map((team: string) => <option key={team}
                                                                           value={team}>{team.toUpperCase()}</option>)
                        }
                    </select>
                    <input className="button" type={"submit"} value={"Login"}/>
                </form>
            </div>)
    }

}

export default Login;