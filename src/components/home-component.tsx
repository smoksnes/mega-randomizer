import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import { Card, CardContent, Typography, CardActions, Button, makeStyles, createStyles, Theme, Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

export const HomeComponent: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
            <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Guid generator
              </Typography>
              <Typography color="textSecondary">
                Generate random guids
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                ,
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><Link to="/guid">Advanced</Link></Button>
              <Button size="small"><Link to="/guid">Create one</Link></Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}


// export const HomeComponent: FunctionComponent = () => <aside>
//   <h2>Home</h2>
//     <Card>
//       <CardContent>
//         <Typography color="textSecondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="h2">
//           Create your guids
//         </Typography>
//         <Typography color="textSecondary">
//           adjective
//         </Typography>
//         <Typography variant="body2" component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small"><Link to="/guid">Guids</Link></Button>
//       </CardActions>
//     </Card>
// </aside>



