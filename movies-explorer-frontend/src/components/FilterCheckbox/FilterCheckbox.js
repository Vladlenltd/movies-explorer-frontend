/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function FilterCheckbox() {
  return (
    <div className="checkbox">
      <label htmlFor="short-movie" className="checkbox__label">
        Короткометражки
      </label>
      <input
        type="checkbox"
        className="checkbox__input"
        id="short-movie"
      />
    </div>
  );
}

export default FilterCheckbox;
