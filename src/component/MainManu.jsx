import React from "react";
import "../style/MainManu.css";
import Rice from "./FoodList/RiceManu";
import Noodle from "./FoodList/NoodleManu";
import Dessert from "./FoodList/DessertManu";
import Drink from "./FoodList/DrinkManu";

function MainManu(props) {
  const { setDisplayRandomPage, setRandomManu } = props;

  function onRandomRiceClick() {
    let rice = Rice[Math.floor(Math.random() * Rice.length)];

    return setDisplayRandomPage(true), setRandomManu(rice);
  }

  function onRandomNoodleClick() {
    let noodle = Noodle[Math.floor(Math.random() * Noodle.length)];

    return setDisplayRandomPage(true), setRandomManu(noodle);
  }

  function onRandomDessertClick() {
    let dessert = Dessert[Math.floor(Math.random() * Dessert.length)];

    return setDisplayRandomPage(true), setRandomManu(dessert);
  }

  function onRandomDrinkClick() {
    let drink = Drink[Math.floor(Math.random() * Drink.length)];

    return setDisplayRandomPage(true), setRandomManu(drink);
  }

  return (
    <div className="mainManu">
      <div className="mainManuText">
        <h1 className="mainManuText">เจ๊ดาวรับจบ</h1>
        <p className="mainManuText">เลือกแล้วสั่งเลย!</p>
      </div>
      <div className="list">
        <ul>
          <div onClick={onRandomRiceClick} className="box rice">
            <div className="boxText">
              <h1 className="list">RICE</h1>
              <h4 className="list">เบื่อเส้น อยากกินข้าว</h4>
            </div>
          </div>
          <div onClick={onRandomNoodleClick} className="box noodle">
            <div className="boxText">
              <h1 className="list">NOODLE</h1>
              <h4 className="list">เบื่อข้าว อยากกินเส้น</h4>
            </div>
          </div>
          <div onClick={onRandomDessertClick} className="box dessert">
            <div className="boxText">
              <h1 className="list">DESSERT</h1>
              <h4 className="list">กินคาวไม่กินหวานสันดานไพร่</h4>
            </div>
          </div>
          <div onClick={onRandomDrinkClick} className="box drink">
            <div className="boxText">
              <h1 className="list">DRINK</h1>
              <h4 className="list">อาหารดีๆ ต้องคู่กับเครื่องดื่มโดนๆ</h4>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default MainManu;
