/* eslint-disable react/prop-types */
import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn, login }) {
	const location = useLocation();

	return (
		<header
			className={`header ${
				location.pathname === '/' ? '' : 'header_white'
			}`}
		>
			<Logo />
			<Navigation
				login={login}
				loggedIn={loggedIn}
			/>
		</header>
	);
}
export default Header;
