import arrow from '../../images/arrow.svg';

function Portfolio() {
	return (
		<section className="portfolio">
			<h2 className="portfolio__title">Портфолио</h2>
			<ul className="portfolio__list">
				<li className="portfolio__items">
					<a
						className="portfolio__link"
						href="https://vladlenltd.github.io/how-to-learn/"
						target="_blank"
						rel="noreferrer"
					>
						<p className="portfolio__text">Статичный сайт</p>
						<img
							className="portfolio__arrow"
							src={arrow}
							alt="стрелка"
						/>
					</a>
				</li>
				<li className="portfolio__items">
					<a
						className="portfolio__link"
						href="https://vladlenltd.github.io/russian-travel/"
						target="_blank"
						rel="noreferrer"
					>
						<p className="portfolio__text">Адаптивный сайт</p>
						<img
							className="portfolio__arrow"
							src={arrow}
							alt="стрелка"
						/>
					</a>
				</li>
				<li className="portfolio__items">
					<a
						className="portfolio__link"
						href="https://mesto.vltd.nomoredomains.sbs/"
						target="_blank"
						rel="noreferrer"
					>
						<p className="portfolio__text">
							Одностраничное приложение
						</p>
						<img
							className="portfolio__arrow"
							src={arrow}
							alt="стрелка"
						/>
					</a>
				</li>
			</ul>
		</section>
	);
}
export default Portfolio;
