import React, { Component } from 'react';
import Example from '../components/Example';

import axios from 'axios';


const Course = props => (
    <tr>
        <td>{props.user.username}</td>
    </tr>
)

export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                this.setState({ users: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
    }


    userList() {
        return this.state.users.map(currentuser => {
            return <Course user={currentuser} key={currentuser._id} />
        })
    }

    render() {
        return (
            <div>
                <Example>학생</Example>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userList()}
                    </tbody>
                </table>
            </div>
        );
    }
};