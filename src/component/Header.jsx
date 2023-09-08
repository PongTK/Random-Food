import React from "react";
import "../style/Header.css";

function Header() {
  return (
    <div className="home">
      <div className="homeSign">
        <img src="src\assets\cooking.svg" alt="cooking" />
        <h1 className="homeSign">Aunty Dow's Food Court</h1>
        <p className="homeSign">By PongTK</p>
      </div>
      <div className="contact">
        <a href="#" className="contactlink github">
          <img src="src\assets\Footer\github.png" alt="github" />
        </a>
        <a href="#" className="contactlink linkedin">
          <img src="src\assets\Footer\linkedin.png" alt="linkedin" />
        </a>
      </div>
    </div>
  );
}

export default Header;
