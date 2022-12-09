/* eslint-disable react/jsx-no-bind */
import React, { useEffect } from 'react';
import EnteryForm from '../Sign/Sign';
import ValidationForms from '../ValidationForms/ValidationForms';


function Register({ onRegistration }) {
	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [isButtonActive, setIsButtonActive] = React.useState(false);

	const { values, handleChange, errors, isValid, resetForm } = ValidationForms()

	useEffect(() => {
		if (!isValid) {
			setIsButtonActive(true);
		} else {
			setIsButtonActive(false);
		}
	}, [isValid])

	function handleChangeName(e) {
		setName(e.target.value);
		handleChange(e);
	}

	function handleChangeEmail(e) {
		setEmail(e.target.value);
		handleChange(e);
	}

	function handleChangePassword(e) {
		setPassword(e.target.value);
		handleChange(e);
	}

	function handleSubmit() {
		onRegistration(name, email, password);
	}
	return (
		<main className="sign">
			<EnteryForm
				title="Добро пожаловать!"
				buttonText="Зарегистрироваться"
				buttonDisable={isButtonActive}
				questionTitle="Уже зарегистрированы?"
				bottomLink="/sign-in"
				bottomLinkText="Войти"
				formType="sign"
				onClick={handleSubmit}
				values={values}
				isValid={isValid}
				resetForm={resetForm}

			>
				<label className="sign-form__label" htmlFor="name">
					Имя
					<input
						required
						className="form__item sign-form__item"
						id="name"
						type="name"
						name="name"
						placeholder="Имя"
						value={name || ''}
						onChange={handleChangeName}
					/>
				</label>
				<span className="sign-form__error"><p className="sign-form__error-text">{errors.name ? 'Поле должно содержать от 2 до 30 символов (буквы, пробелы и дефисы)' : ''}</p></span>
				<label className="sign-form__label" htmlFor="email">
					E-mail
					<input
						required
						className="form__item sign-form__item"
						id="email"
						type="email"
						name="email"
						placeholder="E-mail"
						value={email || ''}
						onChange={handleChangeEmail}
					/>
				</label>
				<span className="sign-form__error"><p className="sign-form__error-text">{errors.email || ''}</p></span>
				<label className="sign-form__label" htmlFor="password">
					Пароль
					<input
						required
						className="form__item sign-form__item"
						id="password"
						type="password"
						name="password"
						placeholder="Пароль"
						value={password || ''}
						onChange={handleChangePassword}
					/>
				</label>
				<span className="sign-form__error"><p className="sign-form__error-text ">{errors.password || ''}</p></span>
			</EnteryForm>
		</main>
	);
}

export default Register;
