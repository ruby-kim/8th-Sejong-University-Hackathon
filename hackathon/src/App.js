import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

import Home from "./screens/Home";
import Professor from "./screens/Professor";
import Student from "./screens/Student";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/professor" component={Professor} />
            <Route path="/student" component={Student} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
