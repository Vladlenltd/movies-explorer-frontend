/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link } from 'react-router-dom';
import AccountLogo from '../../images/account-logo.svg';

function BurgerMenu({ isOpen, isClose }) {
	return (
		<div className={`burger-menu ${isOpen && 'open'}`}>
			<div className="burger-menu__container">
				<button
					className="burger-menu__close-icon"
					onClick={isClose}
					type="button"
				/>
				<nav className="burger-menu__link-wrapper">
					<Link to="/" className="burger-menu__link">
						Главная
					</Link>
					<Link to="/movies" className="burger-menu__link">
						Фильмы
					</Link>
					<Link to="/saved-movies" className="burger-menu__link">
						Сохраненные фильмы
					</Link>
				</nav>
				<Link to="/profile" className="burger-menu__btn-profile">
					<img className="profile__img" src={AccountLogo} alt="иконка аккаунта" />
					Аккаунт
				</Link>
			</div>
		</div>
	);
}

export default BurgerMenu;
