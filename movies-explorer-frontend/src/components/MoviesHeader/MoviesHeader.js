import { React, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AccountLogo from '../../images/account-logo.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function MoviesHeader() {
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState('');
	const handleBurgerMenuOpenClick = () => setIsBurgerMenuOpen('open');
	const handleBurgerMenuCloseClick = () => setIsBurgerMenuOpen('');
	return (
		<>
			<nav className="navigate">
				<ul className="navigate__list">
					<li className="navigate__item">
						<NavLink to="/movies" className="navigate__movies">
							Фильмы
						</NavLink>
					</li>
					<li className="navigate__item">
						<NavLink to="/saved-movies" className="navigate__movies">
							Сохранённые фильмы
						</NavLink>
					</li>
				</ul>
				<Link to="/profile" className="navigate__profile">
					<img className="profile__img" src={AccountLogo} alt="иконка аккаунта" />
					Аккаунт
				</Link>
			</nav>
			<button
				className="navigate__button-open"
				onClick={handleBurgerMenuOpenClick}
			/>
			<BurgerMenu
				isOpen={isBurgerMenuOpen}
				isClose={handleBurgerMenuCloseClick}
			/>
		</>
	);
}

export default MoviesHeader;
