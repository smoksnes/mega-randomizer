import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Bar } from './pages';
import { GuidComponent } from './components/guid-component';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { HomeComponent } from './components/home-component';

const App: React.FC = () => {
  return (
    <Router>
    <div>

      
      <nav>
        <Link to="/">Home</Link>
        {/* <Link to="/guid">Guids</Link>
        <Link to="/bar">Bar</Link> */}
      </nav>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/guid" component={GuidComponent} />
        <Route exact path="/bar" component={Bar} />
      </Switch>
    </div>
  </Router>
  
  );
}



export default App;
