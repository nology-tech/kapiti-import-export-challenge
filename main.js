import data from "../data/data.js";
import { generateCardHTML, filterByPrice } from "./utilities/utilities.js";

const foodContainer = document.getElementById("food-container");

const hasPriceArr = filterByPrice(data)

foodContainer.innerHTML = generateCardHTML(hasPriceArr);
