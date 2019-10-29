import React, { Component } from 'react'; // let's also import Component
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// the clock's state has one field: The current time, based upon the
// JavaScript class Date

type GuidGeneratorState ={
  guids:string[]
}

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.
export class GuidGenerator extends Component<{},GuidGeneratorState> {
   
  constructor(props: Readonly<{}>){
    super(props);
  }
  // classes = useStyles();

  // Before the component mounts, we initialise our state
  componentWillMount() {
    this.generateGuidsAndSetState(1)
  }

  private generateGuid(count:Number): string[]{
    let list: Array<string> = new Array();
    for(var i=0; i< count; i++){
      var guid = this.generateOneGuid();
      list[i] = guid;
    }
    return list;
  }

  private generateGuidsAndSetState(count:Number) {
    let guids = this.generateGuid(count);
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

  // render will know everything!
  render() {
    return <div>
        <code>{this.state.guids }</code>
        <Button onClick={() => { this.generateGuidsAndSetState(1); }} variant="outlined" color="primary">Default</Button>
    </div>
    
  }
}