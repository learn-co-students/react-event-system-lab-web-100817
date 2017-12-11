import React from 'react';


class Keypad extends React.Component {

  Keypad = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input onKeyUp={this.Keypad} type="password"/>
    )
  }
}

export default Keypad;
