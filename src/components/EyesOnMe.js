// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  is_focused = () => {
    console.log("Good!")
  }

  is_blurred = () => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return (
      <button onFocus={this.is_focused} onBlur={this.is_blurred}></button>
    )
  }

}

export default EyesOnMe;
