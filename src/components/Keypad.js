// Code Keypad Component Here
// In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.
// When that event fires, use console.log to print out the text 'Entering password...'.
import React from 'react';
import ReactDOM from 'react-dom';

class Keypad extends React.Component {
  password = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" onKeyUp={this.password}></input>
    )
  }
}

export default Keypad;
