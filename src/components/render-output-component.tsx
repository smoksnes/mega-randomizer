import React, { useState, FunctionComponent, Component } from 'react'; // importing FunctionComponent
import { Paper, makeStyles, createStyles, Theme, Typography, Drawer, Button } from '@material-ui/core';
import IWriter from '../interfaces/writer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      borderBottomStyle: 'none'
    },
  }),
);


// export const RenderOutputComponent: FunctionComponent = () => {
//   const classes = useStyles();
//   const [items, setItems] = useState<Array<String>>(new Array);

//   return ( 
//     <Paper className={classes.root}>
//       <Typography variant="h5" component="h3">
//         This is a sheet of paper. With count {items.length}.
//       </Typography>
//       <Typography component="p">
//         Paper can be used to build surface or other elements for your application.
//       </Typography>
//     </Paper>
//   );
// }
type RenderOutputComponentState = {
  count:number
};

type RenderOutputProps = {
  writer:IWriter
};

 export default class RenderOutputComponent extends Component<RenderOutputProps,RenderOutputComponentState>  {
  constructor(props: RenderOutputProps){
    super(props);
    this.state = {
      count: 0
    }
  }

  public write(){
    console.log(this.props.writer.write());
  }
  
  render() {
    return (
    <Paper >
      <Typography variant="h5" component="h3">
        This is a sheet of paper. With count {this.state.count}.
      </Typography>
      <Typography component="p">
        Paper can be used to build surface or other elements for your application.
      </Typography>
      <Button onClick={()=> this.write()}>new!!</Button>
    </Paper>
    );
  }
 }

