import React, { useState } from "react";
import Header from "./component/Header.jsx";
import MainManu from "./component/MainManu.jsx";
import Footer from "./component/Footer.jsx";
import PopUp from "./component/PopUp.jsx";
import RandomPage from "./component/RandomPage.jsx";
import "./App.css";

function App() {
  const [displayPopUp, setDisplayPopUp] = useState(true);

  let firstPopUp = true;
  if (!!displayPopUp) {
    firstPopUp = <PopUp setDisplayPopUp={setDisplayPopUp} />;
  }
  return (
    <>
      <Header />
      {firstPopUp}
      <MainManu />
      <RandomPage />
      <Footer />
    </>
  );
}

export default App;
