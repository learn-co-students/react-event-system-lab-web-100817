// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{
  passwordLog = ()=>{
    console.log('Entering password...')
  }
  render(){
    return(
      <div>
        <input onKeyUp={this.passwordLog} type="password"></input>
      </div>
    )
  }
}

export default Keypad;
