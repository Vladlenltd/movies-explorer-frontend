/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import close from '../../images/close-icon.svg';
import accountLogo from '../../images/account-logo.svg';

function BurgerMenu({ closeBurger, onScreen }) {
	const location = useLocation();

	return (
		<section className={`burger-menu ${onScreen ? 'burger-menu_opened' : ''}`}>
			<div className="burger-menu__navi-wrapper">
				<img
					className="burger-menu__image-close"
					src={close}
					alt="Крестик"
					onClick={closeBurger}
				/>
				<div className="burger-menu__buttons-wrapper">
					<Link
						to="/"
						className="burger-menu__link"
					>
						<button className={`burger-menu__button burger-menu__button_first
                        ${location.pathname === '/' ? 'burger-menu__active' : ''}`}
						>
							Главная
						</button>
					</Link>
					<Link
						to="/movies"
						className="burger-menu__link"
					>
						<button className={`burger-menu__button
                        ${location.pathname === '/movies' ? 'burger-menu__active' : ''}`}
						>
							Фильмы
						</button>
					</Link>
					<Link
						to="/saved-movies"
						className="burger-menu__link"
					>
						<button className={`burger-menu__button
                        ${location.pathname === '/saved-movies' ? 'burger-menu__active' : ''}`}
						>
							Сохранённые фильмы
						</button>
					</Link>
				</div>
				<div className="burger-menu__profile-wrapper">
					<Link
						to="/profile"
						className="burger-menu__link burger-menu__link_account"
					>
						<button className="burger-menu__button burger-menu__button_account">
							<div className="burger-menu__icon">
								<img className="burger-menu__icon-image" src={accountLogo} alt="Иконка" />
							</div>
							Аккаунт
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default BurgerMenu;
