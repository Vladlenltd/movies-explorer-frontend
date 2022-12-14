import React from 'react';
import EnteryForm from '../Sign/Sign';

function Register() {
	return (
		<main className="sign">
			<EnteryForm
				title="Добро пожаловать!"
				buttonText="Зарегистрироваться"
				questionTitle="Уже зарегистрированы?"
				bottomLink="/sign-in"
				bottomLinkText="Войти"
				formType="sign"
			>
				<label className="sign-form__label" htmlFor="name">
					Имя
					<input
						required
						className="form__item sign-form__item"
						id="name"
						type="name"
						name="mane"
						placeholder="Имя"
						value=""
					/>
				</label>
				<span className="sign-form__error"><p className="sign-form__error-text sign-form__error-text_hidden ">Что то пошло не так...</p></span>
				<label className="sign-form__label" htmlFor="email">
					E-mail
					<input
						required
						className="form__item sign-form__item"
						id="email"
						type="email"
						name="email"
						placeholder="E-mail"
						value=""
					/>
				</label>
				<span className="sign-form__error"><p className="sign-form__error-text sign-form__error-text_hidden ">Что то пошло не так...</p></span>
				<label className="sign-form__label" htmlFor="password">
					Пароль
					<input
						required
						className="form__item sign-form__item"
						id="password"
						type="password"
						name="password"
						placeholder="******"
						value=""
					/>
				</label>
				<span className="sign-form__error"><p className="sign-form__error-text ">Что то пошло не так...</p></span>
			</EnteryForm>
		</main>
	);
}

export default Register;
