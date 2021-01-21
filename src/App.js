import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning" />} /> 
          </Switch>
        </div>
        <div>
          <Link to="/" > Home </Link>
          <Link to="/about" > About </Link>
          <Link to="/users/1" > Users </Link>
        </div>
      </BrowserRouter>    
    );
  }
}

export default App;
