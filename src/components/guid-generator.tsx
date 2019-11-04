 import React, { Component } from 'react'; // let's also import Component
 import Button from '@material-ui/core/Button';
import { FormControl, Input, FormHelperText } from '@material-ui/core';

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
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

// the clock's state has one field: The current time, based upon the
// JavaScript class Date

type GuidGeneratorState ={
  guids:string[],
  count:1
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
    // this.classes = props;
    // const { this.classes } = props;
  }
  // classes = useStyles();

  // Before the component mounts, we initialise our state
  componentWillMount() {
    this.generateGuidsAndSetState(1)
    // this.setState({
    //   count: 1
    // });
  }

  private generateGuid(count:Number): string[]{
    let list: Array<string> = new Array();
    for(var i=0; i< count; i++){
      var guid = this.generateOneGuid();
      list[i] = guid;
    }
    return list;
  }

  // private handleChange => (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event.target.value);
  //   // this.setState({
  //   //   count: event.target.value
  //   // });
  //   // setValues({ ...values, [prop]: event.target.value });
  // };

  private generateGuidsAndSetState(count:Number) {
    let guids = this.generateGuid(count);
    this.setState({
      guids: guids
    });
  }

  private handleChange(arg0: string): void {
    console.log('foo');
  }

  private generateOneGuid():string{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  // render will know everything!
  render() {
    // const classes = useStyles();
    return <div>
        <code>{this.state.guids }</code>
        <FormControl >
        <Input
          id="adornment-weight"
          value={this.state.count}
          // onChange={this.handleChange('weight')}
          endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
          aria-describedby="weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
        />
        <FormHelperText id="weight-helper-text">Weight</FormHelperText>
      </FormControl>
        <Button onClick={() => { this.generateGuidsAndSetState(10); }} variant="outlined" color="primary">Create</Button>
    </div>
    
  }

}

// const GuidGenerator: React.FunctionComponent<{ title: string }> = ({
 
  

//   children,
//   title
// }) => (
//   <div>
//           <div title={title}>{children} CHILDREN</div>;
//            <code>{this.state.guids }</code>
//           <FormControl >
//           <Input
//             id="adornment-weight"
//             // value={this.state.count}
//             // onChange={this.handleChange('weight')}
//             // endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
//             aria-describedby="weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//           />
//           <FormHelperText id="weight-helper-text">Weight</FormHelperText>
//         </FormControl>
//           {/* <Button onClick={() => { this.generateGuidsAndSetState(10); }} variant="outlined" color="primary">Create</Button> */}
//       </div>
//   );

// export default GuidGenerator;