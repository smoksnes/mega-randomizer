import React, {  Component } from 'react'; // importing FunctionComponent
import { Card, CardContent, Typography, CardActions, Button, Grid, Paper } from '@material-ui/core';
import RenderOutputComponent from './render-output-component';
import IWriter from '../interfaces/writer';
import GuidWriter from '../writers/guid-writer';
import EmptyWriter from '../writers/empty-writer';
import SwedishOrganizationNumber from '../writers/swedish-organization-number';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       // height: 140,
//       // width: 100,
//     },
//     control: {
//       padding: theme.spacing(2),
//     },
//   }),
// );

type HomeComponentState = {
  currentWriter: IWriter | null,
};

export default class HomeComponent extends Component<{},HomeComponentState> {
  static defaultProps = {
    currentWriter: new EmptyWriter(),
  }

  state = {
    currentWriter: null
  };


changeComponent(comp : IWriter){
  this.setState({
    currentWriter: comp
  });
};

render(){
  return (
    <div>
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
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => this.changeComponent(new GuidWriter())}>Create</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Swedish orgno generator
              </Typography>
              <Typography color="textSecondary">
                Generate random orgno
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => this.changeComponent(new SwedishOrganizationNumber())}>Create</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs>
          <Paper>xs=3</Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
            <RenderOutputComponent writer={this.state.currentWriter}/>
          </Grid>
      </Grid>
    </div>
  );
}

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



