import React from "react";

const Realisations = () => {
  return (
    <>
      <div className="realisations">
        <h2>Réalisations</h2>
        <div className="firstCard">
          <div className="zenifine"></div>
          <h4>Zenifine</h4>
          <p>Présentations de massages bien-être</p>
        </div>
        <div className="secondCard">
          <div className="weeat"></div>
          <h4>Weeat</h4>
          <p>Recettes pour sportifs</p>
        </div>
        <div className="thirdCard">
          <div className="game"></div>
          <h4>Planet Hunter</h4>
          <p>Mini jeu shooter dans le navigateur</p>
        </div>
      </div>
      <div className="miniTimeline"></div>
    </>
  );
};

export default Realisations;
