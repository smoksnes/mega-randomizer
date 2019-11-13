import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

export const HomeComponent: FunctionComponent = () => <aside>
  <h2>Home</h2>
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
</aside>



