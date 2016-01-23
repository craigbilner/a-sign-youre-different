import React, { Component } from 'react';
import SomeInput from '../SomeInput/SomeInput';
import cloneDeep from 'lodash.clonedeep';

export default class SomeHOC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: 'some default',
      nestedObj: {
        inputValue: 'some nested default',
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.nestedObj.inputValue !== nextState.nestedObj.inputValue;
  }

  handleChange(newValue) {
    console.log('handleChange', newValue);

    /* this works as expected
     this.setState({
     inputValue: newValue,
     });
     */

    /* this works too
     this.setState({
     nestedObj: {
     inputValue: newValue,
     }
     });
     */

    /* this works...without SCU

     const stateCopy = {
     ...this.state
     };

     stateCopy.nestedObj.inputValue = newValue;

     console.log('stateCopy', stateCopy.nestedObj.inputValue);

     this.setState(stateCopy);

     */

    // this works with SCU too

    const stateCopy = cloneDeep(this.state);

    stateCopy.nestedObj.inputValue = newValue;

    console.log('stateCopy', stateCopy.nestedObj.inputValue);

    this.setState(stateCopy);
  }

  render() {
    return (
      <SomeInput
        value={this.state.nestedObj.inputValue}
        onChange={this.handleChange}
      />
    );
  }
}
