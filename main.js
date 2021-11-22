import data from "../data/data.js";

const foodContainer = document.getElementById("food-container");

// EXTRA - SOME OF OUR PRICES ARE NOT NUMBERS OR ARE 0
const hasPriceArr = data.filter(foodItem => !isNaN(foodItem.price) && foodItem.price > 0);

const generateCardHTML = foodArray => {
  const HTML = foodArray.map(food => {
    return `<div><p>${food.img}</p><p>${food.name}</p><p>£${food.price}</p></div>`;
  });

  return HTML.join("");
};

foodContainer.innerHTML = generateCardHTML(hasPriceArr);
