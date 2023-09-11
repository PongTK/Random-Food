import React from "react";
import "../style/Header.css";

function Header() {
  return (
    <div className="home">
      <div className="homeSign">
        <div className="homeSignLogo">
          <img src="public\frying-pan (2).png" alt="cooking" />
        </div>
        <h1 className="homeSign">Aunty Dow's Food Court</h1>
        <p className="homeSign">By PongTK</p>
      </div>
      <div className="contact">
        <a
          href="https://github.com/PongTK"
          target="_blank"
          className="contactlink github"
        >
          <img src="/icons8-github.svg" alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/tunyatorn-kaewmool/"
          target="_blank"
          className="contactlink linkedin"
        >
          <img src="/icons8-linkedin.svg" alt="linkedin" />
        </a>
      </div>
    </div>
  );
}

export default Header;
