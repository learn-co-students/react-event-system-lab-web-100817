// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     input:
  //   }
  // }
  input_password = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" onKeyUp={this.input_password} />
    )
  }
}

export default Keypad;
