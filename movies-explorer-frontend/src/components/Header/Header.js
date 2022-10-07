/* eslint-disable react/prop-types */
import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import MainHeader from '../MainHeader/MainHeader';
import MoviesHeader from '../MoviesHeader/MoviesHeader';

function Header(/* { loggedIn, login } */) {
	const location = useLocation();

	return (
		<header
			className={`header ${
				location.pathname === '/' ? '' : 'header_white'
			}`}
		>
			<Logo />
			{location.pathname === '/' ? <MainHeader /> : ''}
			{location.pathname === '/movies' ? <MoviesHeader /> : ''}
			{location.pathname === '/saved-movies' ? <MoviesHeader /> : ''}
			{location.pathname === '/profile' ? <MoviesHeader /> : ''}
		</header>
	);
}
export default Header;
