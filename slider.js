import { getArraygCard } from "./getArraygCard.js";
import { createCard } from "./CreateCard.js";

export async function createSlider () {
    const data = await getArraygCard()
    const cards = []
    for (let i = 0; i < data.length; i++) {
        
        const card = new createCard(data[i].id, data[i].name, data[i].price, data[i].image.slice(1), data[i].rating, data[i].availability, data[i].goodsOfDay, data[i].type)
        cards.push(card)
    }
        document.querySelector('.day-products__list').innerHTML = ""
     cards.forEach(element => {
        if(element.goodsOfDay){
            element.createCardsGoodOfDay("day-products__list")
        }
    });

    setTimeout(() => {
      initilizitionSlider()
        const allcardsOfGoodDay = document.querySelectorAll('.day-products__item');
    }, 100);
    
}

export async function initilizitionSlider () {
     setTimeout(() => {
      
      const swiper = new Swiper('.swiper', {
   // Optional parameters
   horizontal: 'vertical',
   loop: true,
   slidesPerView: 4,
   spaceBetween: 40,
    initialSlide: 0,
   
 
   // If we need pagination
   
 
   //  effect: 'flip',
   // flipEffect: {
   //   slideShadows: false,
   // },
 
   // Navigation arrows
   navigation: {
     nextEl: '.day-products__navigation-btn--next',
     prevEl: '.day-products__navigation-btn--prev',
   },
  
   keyboard: {
     enabled: true,
     onlyInViewport: false,
   },
 
   // And if we need scrollbar
   
 });
     }, 100);
}