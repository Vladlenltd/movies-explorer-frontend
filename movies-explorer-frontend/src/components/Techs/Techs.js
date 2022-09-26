import React from 'react';

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title title">Технологии</h2>
      <article className="techs__wrapper">
        <h3 className="techs__heading">7 технологий</h3>
        <p className="techs__subtitle">
          На курсе веб-разработки мы освоили технологии, которые
          применили в дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__elements">
            <p className="techs__text">HTML</p>
          </li>
          <li className="techs__elements">
            <p className="techs__text">CSS</p>
          </li>
          <li className="techs__elements">
            <p className="techs__text">JS</p>
          </li>
          <li className="techs__elements">
            <p className="techs__text">React</p>
          </li>
          <li className="techs__elements">
            <p className="techs__text">Git</p>
          </li>
          <li className="techs__elements">
            <p className="techs__text">Express.js</p>
          </li>
          <li className="techs__elements">
            <p className="techs__text">mongoDB</p>
          </li>
        </ul>
      </article>
    </section>
  );
}
export default Techs;
