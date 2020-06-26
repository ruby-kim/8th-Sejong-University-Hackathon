import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

import Home from "./screens/Home";
import ProblemList from "./screens/Professor/ProblemList";
import CreateProblem from "./screens/Professor/CreateProblem";
import EditProblem from "./screens/Professor/EditProblem";
import Student from "./screens/Student";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/professor" component={ProblemList} />
            {/* <Route path="/professor/edit/:id" component={EditProblem} />
            <Route path="/professor/create" component={CreateProblem} /> */}
            <Route path="/student" component={Student} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
