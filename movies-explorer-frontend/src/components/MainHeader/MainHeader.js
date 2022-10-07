import React from 'react';
import { Link } from 'react-router-dom';

function MainHeader() {
	return (
		<nav className="navigation">
			<ul className="navigation__list">
				<li className="navigation__item">
					<Link to="/sign-up" className="navigation-links__registration navigation-links">
						Регистрация
					</Link>
				</li>
				<li className="navigation__item">
					<Link to="/sign-in" className="navigation-links__login navigation-links">
						Войти
					</Link>
				</li>
			</ul>
		</nav>
	);
}
export default MainHeader;
