import "./styles.css";
import React, { useState } from "react";

var fooddata = {
  Healthy: [
    { type: " Sprouts", rating: "4/5" ,description:"It gives energy to our metabolism"},
    { type: "Fruits ", rating: "3/5",description:" They gives essential vitamins to our body"},
    { type: "Local variety rice", rating: " 5/5",description:"It contains anti-bodies" }
  ],

  Biryanis: [
    { type: "Mutton Biryani", rating: "4/5" , description:" Tastes better with small pieces"},
    { type: "Nalli Gosh Biryanni", rating: "5/5", description:" which contains bones of goat"},
    { type: " Chicken Biryanni", rating: "3/5" ,  description:"Tastes better with masala "}
  ],
  veg: [
    { type: " Mushroom", rating: "5/5"  ,description:"Lowers blood pressure " },
    { type: " Leaf Vegetables", rating: "5/5",description:"Good to our eyes"},
    { type: " Paneer", rating: "3.5/5" ,description:" contains calcium"}
  ]
};

export default function App() {
  const [clicked, genreClicked] = useState("veg");

  function onclickHandler(types) {
    genreClicked(types);
  }

  return (
    <div className="App">
      <h1>
        Food Recomendation <span>😋</span>
      </h1>
      <p style={{ fontFamily: "cursive", fontSize: "medium" }}>
        Checkout my recomendations for Food. Select types of food
      </p>
      <div>
        {Object.keys(fooddata).map((types) => (
          <button
            onClick={() => onclickHandler(types)}
            style={{
              padding: "0.5rem 2rem",
              border: "2px solid black",
              borderRadius: "1rem",
              margin: "0rem 1rem",
              cursor: "pointer"
            }}
          >
            {types}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        {fooddata[clicked].map((food) => (
          <ul
            style={{
              // paddingInline:"1rem",
              display: "block",
              backgroundColor: "white",
              border: "2px solid black",
              borderRadius: "0.5rem",
              width: "70%",
              margin: "0.6rem 2rem",
              padding: "1.5rem",
              cursor: "text",
              color: " green"
            }}
            key={food.type}
          >
            {" "}
            <div style={{ fontSize: "large" }}>{food.type}</div>
             <div style={{ fontSize: "medium" }}>
              {<span>Rating : </span>}
              {food.rating}
            </div>
            <div style={{ fontSize: "large" }}>{food.description}</div>
          </ul>
        ))}
      </div>
    </div>
  );
}
