/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState, useEffect } from 'react';
import Header from '../Header/Header';
import { CurrentUserContext } from '../Context/CurrentUserContext';
import { ValidationForms } from '../ValidationForms/ValidationForms'

// eslint-disable-next-line react/prop-types
function Profile({ handleUpdateUser, logOut }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isButtonActive, setIsButtonActive] = useState(false);
    const currentUser = useContext(CurrentUserContext);
    const { handleChange, errors, isValid } = ValidationForms();

    useEffect(() => {
        if (name === currentUser.name && email === currentUser.email) {
            setIsButtonActive(true);
        } else if (isValid) {
            setIsButtonActive(false);
        } else if (!isValid) {
            setIsButtonActive(true);
        }
    }, [email, name, currentUser.name, currentUser.email, isValid])

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser.name, currentUser.email]);

    function handleChangeName(e) {
        setName(e.target.value);
        handleChange(e);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
        handleChange(e);
    }

    function handleSubmit() {
        handleUpdateUser(name, email);
    }
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
                            minLength='2'
                            maxLength='40'
                            required='{true}'
                            placeholder={currentUser.name}
                            pattern='[A-Za-zА-Яа-яЁё\s-]+'
                            onChange={handleChangeName}
                            value={name === undefined ? currentUser.name : name}
                        />
                        <label className="profile__label profile__label_name" htmlFor="name">Имя</label>
                        <span className="sign-form__error"><p className="sign-form__error-text">{errors.name || ''}</p></span>
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
                            onChange={handleChangeEmail}
                            value={email === undefined ? currentUser.email : email}
                        />
                        <label className="profile__label profile__label_email" htmlFor="email">E-mail</label>
                        <span className="sign-form__error"><p className="sign-form__error-text">{errors.email || ''}</p></span>
                    </div>
                </form>
                <div className="profile__wrapper">
                    <button
                        type="submit"
                        className="profile__btn profile__submit-btn"
                        onClick={handleSubmit}
                        disabled={isButtonActive}
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
