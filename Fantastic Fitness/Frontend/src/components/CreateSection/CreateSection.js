import React, { Component } from 'react';
import axios from 'axios';

export default class CreateSection extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.userInput = React.createRef();

        this.state = {
            username: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username
        }
        window.history.pushState({}, '', '/create');

        console.log(user);

        axios.post('http://localhost:8080/userType/add', user)
            .then(res => {
                alert("Type created successfully!");
            })
            .catch(err => console.error(err))

        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                <div>
                <h3 style={{color:"black"}}>Create Section</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Workout Type:</label>
                        <input
                            ref={this.userInput}
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Create</button>
                    </div>
                </form>
            </div>
            </div>
            
        )
    }
}