/* eslint-disable react/prop-types */
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import MainHeader from '../MainHeader/MainHeader';
import MoviesHeader from '../MoviesHeader/MoviesHeader';

function Header({ colorTheme, onLogin }) {
	const location = useLocation();

	return (
		<header
			className={colorTheme ? 'header header_dark' : 'header header_white'}
		>
			<Logo />
			{onLogin ? (location.pathname === '/' ? <MoviesHeader /> : '') : (location.pathname === '/' ? <MainHeader /> : '')}


			{location.pathname === '/movies' ? <MoviesHeader /> : ''}
			{location.pathname === '/saved-movies' ? <MoviesHeader /> : ''}
			{location.pathname === '/profile' ? <MoviesHeader /> : ''}
		</header>
	);
}
export default Header;
