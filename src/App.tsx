import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Home, Bar } from './pages';
import { GuidComponent } from './components/guid-component';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <Router>
    <div>
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          Create your guids
        </Typography>
        <Typography color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to="/guid">Guids</Link></Button>
      </CardActions>
    </Card>
      
      <nav>
        <Link to="/">Home</Link>
        <Link to="/guid">Guids</Link>
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
