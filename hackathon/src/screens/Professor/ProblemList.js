import React, { Component } from 'react';
import Example from '../../components/Example';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Course = props => (
    <tr>
        <td>{props.course.name}</td>
        <td>{props.course.description}</td>
        <td>{props.course.targetClass}</td>
        <td>{props.course.date}</td>
        <td>
            <Link to={"/professor/edit/" + props.course._id}>수정</Link> | <a href="#" onClick={() => { props.deleteCourse(props.course._id) }}>삭제</a>
        </td>
    </tr>
)

export default class ProblemList extends Component {
    constructor(props) {
        super(props);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.state = { courses: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/courses/')
            .then(response => {
                this.setState({ courses: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteCourse(id) {
        axios.delete('http://localhost:5000/courses/' + id)
            .then(response => {
                console.log(response.data)
            })

        this.setState({
            courses: this.state.courses.filter(el => el._id !== id)
        })
    }

    courseList() {
        return this.state.courses.map(currentcourse => {
            return <Course course={currentcourse} deleteCourse={this.deleteCourse} key={currentcourse._id} />
        })
    }

    render() {
        return (
            <div>
                <Example>교수님</Example>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>name</th>
                            <th>description</th>
                            <th>targetClass</th>
                            <th>date</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.courseList()}
                    </tbody>
                </table>
            </div>
        );
    }
};
