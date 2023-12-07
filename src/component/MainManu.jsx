import React from "react";
import "../style/MainManu.css";
import Rice from "./FoodList/RiceManu";
import Noodle from "./FoodList/NoodleManu";
import Dessert from "./FoodList/DessertManu";
import Drink from "./FoodList/DrinkManu";

function MainManu({ setDisplayRandomPage, setRandomManu }) {
  const menuArray = [
    { type: Rice, name: "RICE" },
    { type: Noodle, name: "NOODLE" },
    { type: Dessert, name: "DESSERT" },
    { type: Drink, name: "DRINK" },
  ];

  function onRandomFoodClick(foodType) {
    let randomMenu = foodType[Math.floor(Math.random() * foodType.length)];

    return setDisplayRandomPage(true), setRandomManu(randomMenu);
  }

  return (
    <div className="mainManu">
      <div className="mainManuText">
        <h1 className="mainManuText">เจ๊ดาวรับจบ</h1>

        <div className="threeWords">
          <div className="innerThreeWords">
            <h2>สุ่ม</h2>
          </div>
          <div className="innerThreeWords">
            <h2>สั่ง</h2>
          </div>
          <div className="innerThreeWords">
            <h2>เสิร์ฟ</h2>
          </div>
        </div>
      </div>
      <div className="list">
        <ul>
          {menuArray.map((item, index) => (
            <div
              key={index}
              onClick={() => onRandomFoodClick(item.type)}
              className={`box ${item.name}`}
            >
              <div className="boxText">
                <h1 className="list">{item.name}</h1>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainManu;
