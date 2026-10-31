import { getBurgerMenu } from "./components/burgerMenu.js";
import { chooseCity } from "./components/chooseCity.js";
import { makeAccordionActive } from "./components/accordion.js";
import { getBscket } from "./components/basket.js";
import { makeValidateForm } from "./components/formValidate.js";
import { getArraygCard } from "./components/getArraygCard.js";
import { createCard } from "./components/createCard.js";
import { sortCards } from "./components/sosrtCards.js";
import { filterCards } from "./components/filterCard.js";
import { renderingCountAvailability } from "./components/renderingCountAvailability.js";
import { showAvailability } from "./components/showAvailability.js";
import { createSlider } from "./components/slider.js";
import { pagination } from "./components/pagination.js";

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
