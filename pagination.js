import { getArraygCard } from "./getArraygCard.js";
import { createCard } from "./CreateCard.js";
import {renderingSortCard } from "./sosrtCards.js"


export async function pagination () {
    const data = await getArraygCard()
        const allCards = []
         for (let i = 0; i < data.length; i++) {
            
            const card = new createCard(data[i].id, data[i].name, data[i].price, data[i].image.slice(1), data[i].rating, data[i].availability, data[i].goodsOfDay, data[i].type)
            cards.push(card)
        }

        // if (cards.length > 6) {
        //     document.querySelector('.catalog__list').innerHTML = ""
        //     const newCards = cards.slice(0, 6)
        //     renderingSortCard(newCards)
        //     if(cards l)
            
        // }
const CARDS_PER_PAGE = 6;          // Сколько карточек на странице
const container = document.getElementById('cards-container'); // Куда рисовать

// === ТВОИ ДАННЫЕ (массив с карточками) ===


// === АВТОМАТИЧЕСКАЯ ЛОГИКА ===
let currentPage = 1;

function getTotalPages() {
  return Math.ceil(allCards.length / CARDS_PER_PAGE);
}

function getCurrentItems() {
  const start = (currentPage - 1) * CARDS_PER_PAGE;
  const end = start + CARDS_PER_PAGE;
  return allCards.slice(start, end);
}

function render() {
  const items = getCurrentItems();
  const total = getTotalPages();
  
  // Отрисовка карточек (замени под свой HTML)
  container.innerHTML = items.map(item => 
    `<div class="card">${item.title}</div>`
  ).join('');
  
  // Обновление кнопок (автоматически)
  document.getElementById('prev-btn').disabled = (currentPage === 1);
  document.getElementById('next-btn').disabled = (currentPage === total);
  document.getElementById('page-info').textContent = `Страница ${currentPage} из ${total || 1}`;
}

function goToPage(page) {
  const total = getTotalPages();
  if (page < 1 || page > total) return;
  currentPage = page;
  render();
}

// === КНОПКИ (HTML должен быть) ===
document.getElementById('prev-btn').addEventListener('click', () => goToPage(currentPage - 1));
document.getElementById('next-btn').addEventListener('click', () => goToPage(currentPage + 1));

// === ЗАПУСК ===
render();



}

function paginationRenderigCard () {

}