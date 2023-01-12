import React, { useEffect } from 'react';
import Sign from '../Sign/Sign';
import ValidationForms from '../ValidationForms/ValidationForms';

function Login({ onLogin }) {
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

	function handleChangeEmail(e) {
		setEmail(e.target.value);
		handleChange(e);
	}

	function handleChangePassword(e) {
		setPassword(e.target.value);
		handleChange(e);
	}

	function handleSubmit(e) {
		e.preventDefault()
		onLogin(email, password);
	}

	return (
		<main className="sign">
			<Sign
				title="Рады видеть!"
				buttonText="Войти"
				onClick={handleSubmit}
				buttonDisable={isButtonActive}
				questionTitle="Ещё не зарегистрированы?"
				bottomLink="/sign-up"
				bottomLinkText="Регистрация"
				formType="sign"
				values={values}
				isValid={isValid}
				resetForm={resetForm}
			>
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
						pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
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
			</Sign>
		</main>
	);
}

export default Login;
