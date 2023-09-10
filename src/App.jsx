import React, { useState } from "react";
import Header from "./component/Header.jsx";
import MainManu from "./component/MainManu.jsx";
import Footer from "./component/Footer.jsx";
import PopUp from "./component/PopUp.jsx";
import RandomPage from "./component/RandomPage.jsx";
import "./App.css";

function App() {
  const [randomManu, setRandomManu] = useState("");

  const [displayPopUp, setDisplayPopUp] = useState(true);

  let firstPopUp = true;
  if (!!displayPopUp) {
    firstPopUp = <PopUp setDisplayPopUp={setDisplayPopUp} />;
  }

  const [displayRandomPage, setDisplayRandomPage] = useState(false);

  let randomPagePopUp = false;
  if (!!displayRandomPage) {
    randomPagePopUp = (
      <RandomPage
        setDisplayRandomPage={setDisplayRandomPage}
        randomManu={randomManu}
      />
    );
  }

  return (
    <>
      <Header />
      {firstPopUp}
      <MainManu
        setDisplayRandomPage={setDisplayRandomPage}
        setRandomManu={setRandomManu}
      />
      {randomPagePopUp}
      <Footer />
    </>
  );
}

export default App;
