import React from "react";

const Timeline = () => {
  return (
    <>
      <div className="timelineContainer">
        <div className="bar"></div>
        <section className="school">
          <div>
            <h2>2014 - 2016</h2>
            <h4>BEP & BAC Pro</h4>
            <p>Gestion des milieux Naturels et de la Faune</p>
          </div>
          <img src="./icons/diploma.webp" alt="Icone de diplome" />
        </section>
        <section className="versailles">
          <div>
            <h2>2016 - 2018</h2>
            <h4>Gendarmerie Nationale</h4>
            <p>Versailles (78)</p>
          </div>
          <img src="./icons/xp.webp" alt="Icone de diplome" />
        </section>
        <section className="tarbes">
          <div>
            <h2>2018 - 2019</h2>
            <h4>Armée de Terre</h4>
            <p>Tarbes (65)</p>
          </div>
          <img src="./icons/xp.webp" alt="Icone de diplome" />
        </section>
        <section className="maisalf">
          <div>
            <h2>2019 - 2022</h2>
            <h4>Gendarmerie Nationale</h4>
            <p>Maison-Alfort (94)</p>
          </div>
          <img src="./icons/xp.webp" alt="Icone de diplome" />
        </section>
        <section className="dev">
          <div>
            <h2>2022</h2>
            <h4>Apprentissage autodidacte</h4>
            <p>HTML, CSS, JavaScript</p>
          </div>
          <img src="./icons/xp.webp" alt="Icone de diplome" />
        </section>
      </div>
    </>
  );
};

export default Timeline;
