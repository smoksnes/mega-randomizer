import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Home, Bar, Foo } from './pages';
// import { Switch, Route } from 'react-router';
// import { Router, Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/foo">Foo</Link>
        <Link to="/bar">Bar</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/foo" component={Foo} />
        <Route exact path="/bar" component={Bar} />
      </Switch>
    </div>
  </Router>
  );


}



export default App;
