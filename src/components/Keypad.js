// Code Keypad Component Here
import React, { Component } from "react";

class Keypad extends Component {
  render() {
    return (
      <div>
        <input
          type="password"
          name="keypad-input"
          placeholder="Keypad"
          onKeyUp={() => console.log("Entering password...")}
        />
      </div>
    );
  }
}

export default Keypad;
