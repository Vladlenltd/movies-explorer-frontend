import React from 'react';

function Button({ color, text }) {
  return (
    <button type="button" className="button">
      {text}
    </button>
  );
}
export default Button;
