 import React, { Component } from 'react'; // let's also import Component
 import Button from '@material-ui/core/Button';
import { FormControl, Input, FormHelperText, List, ListItem, ListItemText, Typography, Grid, Slider } from '@material-ui/core';

import clsx from 'clsx';
import { makeStyles, Theme, withStyles, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
// import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import ImportExport from '@material-ui/icons/ImportExport';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

// the clock's state has one field: The current time, based upon the
// JavaScript class Date

type GuidGeneratorState = {
  guids:string[],
  count:number
};

const useStyles = makeStyles({
  
  
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

// const classes = useStyles();

// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.
// function GuidGenerator(props) {

 export default class GuidGenerator extends Component<{},GuidGeneratorState> {
  // classes: Readonly<{}>;
  
  constructor(props: Readonly<{}>){
    super(props);
    this.state = {
      count: 0, 
      guids: new Array()
    }
  }

  // Before the component mounts, we initialise our state
  componentWillMount() {
    this.setState({
      count: 1
    });
    this.generateGuidsAndSetState();
  }

  private generateGuids(): string[]{
    debugger;
    const count = this.state.count;
    let list: Array<string> = new Array();
    for(var i=0; i< count; i++){
      var guid = this.generateOneGuid();
      list[i] = guid;
    }
    return list;
  }

  private generateGuidsAndSetState() {
    let guids = this.generateGuids();
    this.setState({
      guids: guids
    });
  }

  private generateOneGuid():string{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

 handleSliderChange = (event: any, newValue: number | number[]) => {
  const value = newValue as number;
  this.setState({
    count: value
  });
  this.generateGuids();
  };

 handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  this.setState({
    count: Number(event.target.value)
  });
  this.generateGuids();
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    this.setState({
      count: Number(e.target.value)
    });
 }

  // render will know everything!
  render() {
    const items = this.state.guids.map((item) =>
                <ListItem>
                  <ListItemText
                    primary={item}
                  />
                </ListItem>
      );
    return <div>
    <Typography id="input-slider" gutterBottom>
        How many do you want?
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <ImportExport />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof this.state.count === 'number' ? this.state.count : 0}
            max={20}
            min={1}
             onChange={this.handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
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
        </Grid>
      </Grid>
        <Button onClick={() => { this.generateGuidsAndSetState(); }} variant="outlined" color="primary">Create</Button>

        <List>
              {items}
            </List>   
    </div>
    
  }
}