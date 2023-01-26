import React from "react";

const Footer = () => {
  return (
    <>
      <div className="animBorder"></div>
      <footer>
        <h2>Contact</h2>
        <div className="tel">
          <a href="tel:+33659920450">
            <img src="../../public/icons/tel.png" alt="Telephone icon" />
          </a>
        </div>
        <div className="email"></div>
        <div className="adress"></div>
      </footer>
      ;
    </>
  );
};

export default Footer;
