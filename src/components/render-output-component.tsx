import React, { Component } from 'react'; // importing FunctionComponent
import { Paper, Button, ListItem, ListItemText, List, Slider, Input, withStyles } from '@material-ui/core';
import IWriter from '../interfaces/writer';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       padding: theme.spacing(3, 2),
//       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//       position: 'fixed',
//       bottom: 0,
//       width: '100%',
//       borderBottomStyle: 'none'
//     },
//   }),
// );


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

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    // height: 48,
    padding: '0 30px',
    bottom: 0,
  },
};

type RenderOutputComponentState = {
  output: Array<String>,
  count: Number
};

type RenderOutputProps = {
  writer:IWriter | null,
  classes: any,
};

 class RenderOutputComponent extends Component<RenderOutputProps,RenderOutputComponentState>  {
  state = {
    output: new Array<String>(),
    count: 1
  };
  
  constructor(props: RenderOutputProps){
    super(props);
    console.log('OutputRenderer ctor.')
  }

  componentDidUpdate(prevProps: Readonly<RenderOutputProps>, prevState: Readonly<RenderOutputComponentState>): void {
    if (prevProps.writer == null && this.props.writer != null) {
        this.write();
    }
}


handleSliderChange = (event: any, newValue: number | number[]) => {
  const value = newValue as number;
  this.setState({
    count: value
  });
  };

 handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  this.setState({
    count: Number(event.target.value)
  });
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    this.setState({
      count: Number(e.target.value)
    });
 }

  public write() : void{
    if(this.props.writer == null)
      return;
    const count = this.state.count;
    let list: String[] = new Array(count);
    for(var i=0; i< count; i++){
      var output = this.props.writer.write();
      list[i] = output;
    }
    console.log(list);
    this.setState({
      output: list
    });
  }
  
  render() {
    const { classes } = this.props;

    if(this.props.writer == null){
      return (
        <div>Välj något...</div>
      )
    }

    const items = this.state.output.map((item) =>
    <ListItem>
      <ListItemText
        primary={item}
      />
    </ListItem>
);
    return (
    <Paper className={classes.root}>
                <List>
              {items}
            </List>  
      {/* <Typography variant="h5" component="h3">
        This is a sheet of paper. With count {this.state.count}.
      </Typography>
      <Typography component="p">
        Paper can be used to build surface or other elements for your application.
      </Typography> */}
      <Button onClick={()=> this.write()} variant="outlined" color="primary">Create {this.state.count} more</Button>
      <Slider
            value={typeof this.state.count === 'number' ? this.state.count : 0}
            max={20}
            min={1}
             onChange={this.handleSliderChange}
            aria-labelledby="input-slider"
          />
        <Input
            value={this.state.count}
            margin="dense"
            onChange={this.handleInputChange}
            // onBlur={this.handleBlur}
            inputProps={{
              step: 1,
              min: 1,
              max: 20,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
    </Paper>
    );
  }
 }

 export default withStyles(styles)(RenderOutputComponent);
