import React, { Component } from 'react';
import axios from 'axios';


// 임의로 만든거라 실험 안해봄

export default class CreateCourse extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeTargetClass = this.onChangeTargetClass.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      description: '',
      targetClass: '',
      date: '',
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.name),
            name: response.data[0].name
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeTargetClass(e) {
    this.setState({
      targetClass: e.target.value
    })
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const course = {
      name: this.state.name,
      description: this.state.description,
      targetClass: this.state.targetClass,
      date: this.state.date
    }

    console.log(course);

    axios.post('http://localhost:5000/courses/add', course)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Course Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>TargetClass (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.targetClass}
              onChange={this.onChangeTargetClass}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <input
              type="text" 
              className="form-control"
              value={this.state.onChangeDate}
              onChange={this.onChangeTargetClass}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Course Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}