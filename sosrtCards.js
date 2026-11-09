import { getArraygCard } from "./getArraygCard.js";
import { createCard } from "./CreateCard.js";

export async function sortCards (tej){
    const data = await getArraygCard()
        const cards = []
         for (let i = 0; i < data.length; i++) {
            
            const card = new createCard(data[i].id, data[i].name, data[i].price, data[i].image, data[i].rating, data[i].availability, data[i].goodsOfDay, data[i].type)
            cards.push(card)
        }
   
        // console.log(cards);
        const sortSelect = document.querySelector('.catalog__sort-select')
        
        sortSelect.value = "price-min"
        await renderingSortCard(cards)
        
        
        sortSelect.addEventListener('change', function (e) {
            renderingSortCard(cards)
        });

        return cards
}





export async function renderingSortCard (cards) {
     
    const sortSelect = document.querySelector('.catalog__sort-select')
            if(sortSelect.value == "rating-max") {
                document.querySelector('.catalog__list').innerHTML = ""
       for (let i = 0; i < cards.length; i++) {
        for (let j = 0; j < cards.length - 1; j++) {
            if(cards[j].rating > cards[j +1].rating) {
                let temp = cards[j]
                cards[j] = cards[j+1]
                cards[j+1] = temp
            }
        }
        
       }
       cards.forEach(element => {
            element.createProductCard("catalog__list")
        });
        console.log(cards);

            } else if (sortSelect.value == "price-max") {
                document.querySelector('.catalog__list').innerHTML = ""
       for (let i = 0; i < cards.length; i++) {
        for (let j = 0; j < cards.length - 1; j++) {
            if(cards[j].price.new < cards[j +1].price.new) {
                let temp = cards[j]
                cards[j] = cards[j+1]
                cards[j+1] = temp
            }
        }
        
       }

       cards.forEach(element => {
            element.createProductCard("catalog__list")
        });

            } else if (sortSelect.value == "price-min") {
                document.querySelector('.catalog__list').innerHTML = ""
       for (let i = 0; i < cards.length; i++) {
        for (let j = 0; j < cards.length - 1; j++) {
            if(cards[j].price.new > cards[j +1].price.new) {
                let temp = cards[j]
                cards[j] = cards[j+1]
                cards[j+1] = temp
            }
        }
        
       }

       cards.forEach(element => {
            element.createProductCard("catalog__list")
        });
            }

        }
