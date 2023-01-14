
function AboutProject() {
	return (
		<section className="about-project">
			<h2 className="about-project__title title">О проекте</h2>
			<ul className="about-project__list description__list">
				<li className="description__list-item">
					<h3 className="description__title">
						Дипломный проект включал 5 этапов
					</h3>
					<p className="description__text">
						Составление плана, работу над бэкендом, вёрстку,
						добавление функциональности и финальные доработки.
					</p>
				</li>
				<li className="description__list-item">
					<h3 className="description__title">
						На выполнение диплома ушло 5 недель
					</h3>
					<p className="description__text">
						У каждого этапа был мягкий и жёсткий дедлайн, которые
						нужно было соблюдать, чтобы успешно защититься.
					</p>
				</li>
			</ul>
			<ul className="about-projects__infographics infographics">
				<li className="infographics__list-item">
					<div className="infographics__wrapper">
						<p className="infographics__text">1 неделя</p>
					</div>
					<p className="infographics__subtitle">Back-end</p>
				</li>
				<li className="infographics__list-item infographics__list-item_grey">
					<div className="infographics__wrapper infographics__wrapper_grey">
						<p className="infographics__text">4 неделя</p>
					</div>
					<p className="infographics__subtitle">Front-end</p>
				</li>
			</ul>
		</section>
	);
}
export default AboutProject;
