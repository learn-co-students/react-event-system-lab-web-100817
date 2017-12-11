// Code Keypad Component Here
import React from 'react';

const Keypad = () => (
  <input type = "password"
  onKeyUp = {
    () => console.log('Entering password...')
  }
  />

);

export default Keypad;