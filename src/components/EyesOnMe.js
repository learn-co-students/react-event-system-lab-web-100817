// Code EyesOnMe Component Here
import React from 'react';

const EyesOnMe = () => (
  <button
    onFocus={() => console.log('Good!')}
    onBlur={() => console.log('Hey! Eyes on me!')}
  >
  </button>
);

export default EyesOnMe;