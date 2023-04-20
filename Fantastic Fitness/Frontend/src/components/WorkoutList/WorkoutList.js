import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Workout = props => (
    <tr>
        <td>{props.workout.username}</td>
        <td>{props.workout.description}</td>
        <td>{props.workout.duration}</td>
        <td>{props.workout.date.substring(0, 10)}</td>
        <td>
            {/* <Link to={'/edit/64154c0580d83402ab3982e7'}>Edit</Link> | */}
            <a href="#" onClick={() => props.deleteWorkout(props.workout._id)} style={{color:"black", background:"red", padding:"0"}}>Delete</a>
        </td>
    </tr>
)

export default class WorkoutList extends Component {

    constructor(props) {
        super(props);

        this.deleteWorkout = this.deleteWorkout.bind(this);

        this.state = { workouts: [] }
    }

    componentDidMount() {

        axios.get('http://localhost:8080/workouts/')
            .then(response => {

                if (response.data.length > 0) {
                    this.setState({ workouts: response.data })
                }
            })
            .catch(err => console.error(err))
    }

    deleteWorkout(id) {
        axios.delete('http://localhost:8080/workouts/' + id)
            .then(res => console.log(res.data))
            .catch(err => console.error(err))

        this.setState({
            workouts: this.state.workouts.filter(el => el._id !== id)
        })
    }

    workoutList() {
        return this.state.workouts.map(currentWorkout => {
            return <Workout
                workout={currentWorkout}
                deleteWorkout={this.deleteWorkout}
                key={currentWorkout._id} />
        })
    }

    render() {
        return (
            <div style={{marginLeft:"10%", width:"80%", marginBottom:"3rem", marginTop:"3rem", marginRight:"5%"}}>
                <h3 style={{padding:"1rem"}}>Logged Workouts</h3>
                <table style={{width:"100%"}}>
                    <thead className="thead-light">
                        <tr style={{textAlign:"center", color:"black"}}>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{textAlign:"center", color:"black"}}>
                        {this.workoutList()}
                    </tbody>
                </table>
            </div>
        )
    }
}