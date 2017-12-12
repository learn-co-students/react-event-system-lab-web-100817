// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{
  printPassword =() => {
    console.log('Entering password...');
  }
  render(){
    return(
      <div>
        <label>Password: <input type="password" onKeyUp={this.printPassword}></input></label>
      </div>
    );
  }
}

export default Keypad;
