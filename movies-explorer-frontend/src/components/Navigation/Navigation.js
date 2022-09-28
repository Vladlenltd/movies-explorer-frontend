import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <NavLink className="navigation__link" to="/signup">
          <li>Регистрация</li>
        </NavLink>
        <NavLink className="navigation__link" to="/signin">
          <li>
            <Button type="submit" color="2BE080" text="Войти" />
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navigation;
