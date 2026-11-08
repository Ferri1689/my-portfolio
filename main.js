import { getBurgerMenu } from "./burgerMenu.js";
import { chooseCity } from "./chooseCity.js";
import { makeAccordionActive } from "./accordion.js";
import { getBscket } from "./basket.js";
import { makeValidateForm } from "./formValidate.js";
import { getArraygCard } from "./getArraygCard.js";
import { createCard } from "./createCard.js";
import { sortCards } from "./sosrtCards.js";
import { filterCards } from "./filterCard.js";
import { renderingCountAvailability } from "./renderingCountAvailability.js";
import { showAvailability } from "./showAvailability.js";
import { createSlider } from "./slider.js";
import { pagination } from "./pagination.js";

window.addEventListener('DOMContentLoaded', () => {
getBurgerMenu()
chooseCity()
makeAccordionActive()
getBscket()
makeValidateForm()
getArraygCard()
// renderingCard()
sortCards()
filterCards()
renderingCountAvailability()
showAvailability()
createSlider()
pagination()
});
