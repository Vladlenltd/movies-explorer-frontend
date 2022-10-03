/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import accountLogo from '../../images/account-logo.svg';
import burger from '../../images/burger.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

// eslint-disable-next-line react/prop-types
function Navigation({ loggedIn }) {
	const location = useLocation();
	const [burgerMenu, setBurgerMenu] = React.useState(false);

	function setBurger() {
		setBurgerMenu(!burgerMenu);
	}

	return (
		<div className="navigation">
			<div className="navigation__buttons-wrapper">
				<Link
					to="/movies"
					className="navigation__link"
				>
					<button className={`navigation__button navigation__button_black-text navigation__button_films navigation__button_transparent 
                    ${loggedIn ? '' : 'navigation__hidden'}
                    ${location.pathname === '/' ? 'navigation__button_white-text' : ''}
                    ${location.pathname === '/movies' ? 'navigation__active' : ''}`}
					>
						Фильмы
					</button>
				</Link>
				<Link
					to="/saved-movies"
					className="navigation__link"
				>
					<button className={`navigation__button navigation__button_black-text navigation__button_saved navigation__button_transparent 
                    // ${loggedIn ? '' : 'navigation__hidden'}
                    ${location.pathname === '/' ? 'navigation__button_white-text' : ''}
                    ${location.pathname === '/saved-movies' ? 'navigation__active' : ''}`}
					>
						Сохранённые фильмы
					</button>
				</Link>
			</div>
			<Link
				to="/profile"
				className="navigation__link"
			>
				<button className={`navigation__button navigation__button_black-text navigation__button_with-icon navigation__button_transparent 
                    ${loggedIn ? '' : 'navigation__hidden'}
                    ${location.pathname === '/' ? 'navigation__button_white-text' : ''}`}
				>
					<div className="navigation__icon-wrapper">
						<img className="navigation__icon" src={accountLogo} alt="Иконка" />
					</div>
					Аккаунт
				</button>
			</Link>
			<Link
				to="/sign-up"
			>
				<button className={`navigation__button navigation__button_transparent ${loggedIn ? 'navigation__hidden' : ''}`}>
					Регистрация
				</button>
			</Link>
			<Link
				to="/sign-in"
			>
				<button
					className={`navigation__button ${loggedIn ? 'navigation__hidden' : ''}`}
				>
					Войти
				</button>
			</Link>
			<button
				className={`navigation__button-burger ${loggedIn ? '' : 'navigation__hidden'}`}
				type="button"
				onClick={setBurger}
			>
				<img
					className="navigation__burger-icon"
					src={burger}
					alt="Меню"
				/>
			</button>
			<div className={`navigation__burger ${burgerMenu ? 'navigation__burger_opened' : ''}`}>
				<BurgerMenu
					closeBurger={setBurger}
					onScreen={burgerMenu}
				/>
			</div>
		</div>
	);
}

export default Navigation;
