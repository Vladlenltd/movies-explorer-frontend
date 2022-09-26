import React from 'react';
import foto from '../../images/IMG_3514(600x600).jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title title">Студент</h2>
      <div className="about-me__wrapper">
        <article className="about-me__description">
          <h3 className="about-me__heading">Владислав</h3>
          <p className="about-me__subtitle">
            Фронтенд-разработчик, 36 лет
          </p>
          <p className="about-me__text">
            Я родился в Барнауле с 2007 года живу в Москве, закончил
            факультет экономики и управления в УРАО. У меня есть
            жена и два сына. Я люблю смотреть фильмы и читать книги,
            а ещё увлекаюсь воркаутом. С 2007 года работал продажах.
            Недавно начал кодить. С 2021 года начал учиться
            разработке. В разработке нрвится работать над новыми
            проектами и видеть результат своей работы.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/Vladlenltd/"
          >
            GitHub
          </a>
        </article>
        <img className="about-me__img" src={foto} alt="Фотография" />
      </div>
    </section>
  );
}
export default AboutMe;
