import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Home, Bar } from './pages';
import { GuidComponent } from './components/guid-component';

const App: React.FC = () => {
  return (
    <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/guid">Foo</Link>
        <Link to="/bar">Bar</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/guid" component={GuidComponent} />
        <Route exact path="/bar" component={Bar} />
      </Switch>
    </div>
  </Router>
  );
}



export default App;
