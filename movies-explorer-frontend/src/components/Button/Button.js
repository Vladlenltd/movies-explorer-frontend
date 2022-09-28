/* eslint-disable react/prop-types */
import React from 'react';

function Button({ type, text, onClick }) {
  return (
    <button type="button" className={`button button_type_${type}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
