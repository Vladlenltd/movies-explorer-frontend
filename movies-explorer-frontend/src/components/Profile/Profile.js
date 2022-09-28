/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// eslint-disable-next-line react/prop-types
function Profile({ logOut }) {
  const userName = ' Keks';
  return (
    <section className="profile">
        <h2 className="profile__title">
          Привет
          {userName}
          !
        </h2>
        <form className="profile__form" name="change-profile-form">
          <div className="profile__container">
            <input className="profile__input profile__input_name" id="name" />
            <label className="profile__label profile__label_name" htmlFor="name">Имя</label>
          </div>
          <div className="profile__container">
            <input className="profile__input profile__input_email" id="email" />
            <label className="profile__label profile__label_email" htmlFor="email">E-mail</label>
          </div>
        </form>
      <div className="profile__wrapper">
          <button
            type="submit"
            className="profile__btn profile__submit-btn"
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

    </section>
  );
}
export default Profile;
