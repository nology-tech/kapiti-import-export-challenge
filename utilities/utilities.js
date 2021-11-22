export const generateCardHTML = foodArray => {
  const HTML = foodArray.map(food => {
    return `<div><p>${food.img}</p><p>${food.name}</p><p>£${food.price}</p></div>`;
  });

  return HTML.join("");
};

export const filterByPrice = foodArray => {
  const hasPriceArr = foodArray.filter(foodItem => !isNaN(foodItem.price) && foodItem.price > 0);
  return hasPriceArr;
};
