import React from "react";
import "../style/MainManu.css";

function MainManu() {
  return (
    <div className="mainManu">
      <div className="mainManuText">
        <h1 className="mainManuText">เจ๊ดาวรับจบ</h1>
        <p className="mainManuText">เลือกแล้วสั่งเลย!</p>
      </div>
      <div className="list">
        <ul>
          <a href="" className="box rice">
            <div className="boxText">
              <h1 className="list">RICE</h1>
              <h4 className="list">เบื่อเส้น อยากกินข้าว</h4>
            </div>
          </a>
          <a href="" className="box noodle">
            <div className="boxText">
              <h1 className="list">NOODLE</h1>
              <h4 className="list">เบื่อข้าว อยากกินเส้น</h4>
            </div>
          </a>
          <a href="" className="box dessert">
            <div className="boxText">
              <h1 className="list">DESSERT</h1>
              <h4 className="list">กินคาวไม่กินหวานสันดานไพร่</h4>
            </div>
          </a>
          <a href="" className="box drink">
            <div className="boxText">
              <h1 className="list">DRINK</h1>
              <h4 className="list">อาหารดีๆ ต้องคู่กับเครื่องดื่มโดนๆ</h4>
            </div>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default MainManu;
