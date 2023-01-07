import React from 'react';

function Footer() {
	return (
		<footer className="footer">
			<h2 className="footer__title">
				Учебный проект Яндекс.Практикум х BeatFilm.
			</h2>
			<div className="footer__wrapper">
				<p className="footer__date">&#169; 2023</p>
				<div className="footer__links">
					<a
						className="footer__link"
						href="https://practicum.yandex.ru/"
						target="_blank"
						rel="noreferrer"
					>
						Яндекс.Практикум
					</a>
					<a
						className="footer__link"
						href="https://github.com/Vladlenltd/"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
