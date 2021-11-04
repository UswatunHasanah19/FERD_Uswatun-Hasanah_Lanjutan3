import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.bundle"; // import JS
import "bootstrap/dist/css/bootstrap.min.css"; // import CSS
import Home from './compenent/Home'
import Users from './compenent/Users'

function App() {
  return (
    <Router>
    <div className="container">
      </div>
      <Switch>
        <div className="app-content">
          <Route path="/" exact component={Home} />
          <Route path="/users" exact component={Users} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;