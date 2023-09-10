import React from "react";
import "../style/PopUp.css";

function PopUp(props) {
  const { setDisplayPopUp } = props;
  const closePopUp = () => {
    setDisplayPopUp(false);
  };
  return (
    <div className="popUpContainer">
      <div className="popUpBG" onClick={closePopUp} />
      <div className="popUp">
        <div className="auntyDowPopUpImg"></div>
        <div className="popUpDetail">
          <span className="popUpDetail">
            <h2 className="popUpDetail">"กินอะไรก็ได้"</h2>
            <h2 className="popUpDetail">ไม่มีอยู่จริง</h2>
          </span>
          <span className="popUpDetail">
            <p className="popUpDetail">คิดไม่ออก สุ่มบอกเจ๊ดาว</p>
            <p className="popUpDetail">รังสรรค์ทุกเมนุสุดชิก เพื่อลูกๆของเจ๊</p>
          </span>
          <button className="goToPage" onClick={closePopUp}>
            สุ่มเลย!
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
