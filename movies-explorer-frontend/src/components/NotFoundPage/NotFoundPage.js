import React from 'react';
import Button from '../Button/Button';

function NotFoundPage() {
	return (
		<section className="not-found">
			<div className="not-found__block">
				<h1 className="not-found__title">
					404
				</h1>
				<p className="not-found__subtitle">
					Страница не найдена
				</p>
			</div>
			<Button
				type="not-found-page-go-back"
				text="Назад"
			/>
		</section>
	);
}

export default NotFoundPage;
