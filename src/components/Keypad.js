// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {
  input = () => {
    console.log('Entering password...')
  }
  render() {
    return (
      <form>
        <input type="password" onKeyUp={this.input}/>
      </form>
    )
  }
}

export default Keypad
