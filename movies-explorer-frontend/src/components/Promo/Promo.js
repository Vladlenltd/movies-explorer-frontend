import React from 'react';
import promoImg from '../../images/promo-img.png';

function Promo() {
  return (
    <section className="promo">
      <article className="promo__info">
        <div className="promo__text">
          <h1 className="promo__title">
            Учебный проект студента факультета
            {' '}
            <span className="promo__title_nowrap">Веб-разработки.</span>
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button
            className="promo__button"
            type="button"
            aria-label="Подробнее"
            title="Подробнее"
          >
            Узнать больше
          </button>
        </div>
        <img className="promo__img" src={promoImg} alt="земной шар" />
      </article>
    </section>
  );
}
export default Promo;
