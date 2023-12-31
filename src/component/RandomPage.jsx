import React from "react";
import "../style/RandomPage.css";

function RandomPage(props) {
  const { setDisplayRandomPage, randomManu } = props;

  const closePopUp = () => {
    setDisplayRandomPage(false);
  };
  return (
    <div className="randomPage">
      <div className="randomPageBG" onClick={closePopUp} />
      <div className="randomPageContent">
        <div className="topContent">
          <div className="chatBox">
            <p className="chatBoxMsg">ลูกพร้อมสุ่ม เจ๊พร้อมเสริฟ!</p>
          </div>
          <div className="close" onClick={closePopUp}>
            <img src="/cross-sign.png" alt="close" />
          </div>
        </div>
        <div className="randomContent">
          <img src="/เจ๊2.png" alt="aunty" className="aunty" />
          <div className="bookGroup">
            <div class="randomBook">
              <div class="back"></div>
              <div class="page6">
                <span className="randomResult">
                  <h3>{randomManu}</h3>
                </span>
              </div>
              <div class="page5"></div>
              <div class="page4"></div>
              <div class="page3"></div>
              <div class="page2"></div>
              <div class="page1"></div>
              <div class="front">
                <span className="randomCover">
                  <h3>สุ่มเมนูอาหาร</h3>
                </span>
              </div>
            </div>
            <button className="reRandom" onClick={closePopUp}>
              สุ่มใหม่
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomPage;
