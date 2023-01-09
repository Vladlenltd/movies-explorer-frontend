/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import Header from '../Header/Header';
import { CurrentUserContext } from '../Context/CurrentUserContext';
import { ValidationForms } from '../ValidationForms/ValidationForms'

// eslint-disable-next-line react/prop-types
function Profile({ handleUpdateUser, logOut }) {
	const currentUser = useContext(CurrentUserContext);
	const controlInput = ValidationForms();

	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email } = controlInput.values;
		if (!name) {
			handleUpdateUser(currentUser.name, email);
		} else if (!email) {
			handleUpdateUser(name, currentUser.email);
		} else {
			handleUpdateUser(name, email);
		}
		controlInput.resetForm();
	};


	return (
		<div className="profile__container">
			<Header />
			<main className="profile">
				<h2 className="profile__title">
					Привет {currentUser.name}!
				</h2>
				<form className="profile__form" name="change-profile-form" noValidate>
					<div className="profile__container">
						<input className="profile__input profile__input_name"
							id="name"
							name='name'
							type='text'
							minLength='5'
							maxLength='40'
							required='{true}'
							placeholder={currentUser}
							pattern='[A-Za-zА-Яа-яЁё\s-]+'
							onChange={controlInput.handleChange}
							value={controlInput?.values?.name ?? currentUser.name}
						/>
						<label className="profile__label profile__label_name" htmlFor="name">Имя</label>
					</div>
					<div className="profile__container">
						<input className="profile__input profile__input_email"
							id="email"
							name='email'
							type='email'
							required='{true}'
							minLength='5'
							maxLength='40'
							placeholder={currentUser.email}
							pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
							onChange={controlInput.handleChange}
							value={controlInput?.values?.email ?? currentUser.email}
						/>
						<label className="profile__label profile__label_email" htmlFor="email">E-mail</label>
					</div>
				</form>
				<div className="profile__wrapper">
					<button
						type="submit"
						className="profile__btn profile__submit-btn"
						onClick={handleSubmit}
					>
						Редактировать
					</button>
					<button
						type="button"
						className="profile__btn profile__logout-btn"
						onClick={logOut}
					>
						Выйти из аккаунта
					</button>
				</div>
			</main>
		</div>
	);
}
export default Profile;
