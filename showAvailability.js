import { getArraygCard } from "./getArraygCard.js";
import { createCard } from "./CreateCard.js";


export async function showAvailability () {
    const data = await getArraygCard()
            const cards = []
             for (let i = 0; i < data.length; i++) {
                
                const card = new createCard(data[i].id, data[i].name, data[i].price, data[i].image.slice(1), data[i].rating, data[i].availability, data[i].goodsOfDay, data[i].type)
                cards.push(card)
            }
            
    const nameCity = document.querySelector('.location__city-name')
    const buttonAvailability = document.querySelector('#instock')
    const allItem = document.querySelector('#all-item')

    function sortAvailability () {
        if(nameCity.textContent == "Москва") {
                cards.forEach(element => {
                    if(element.availability.moscow > 0) {
                        element.createProductCard("catalog__list")
                    }
                });
            } else if (nameCity.textContent == "Оренбург") {
                cards.forEach(element => {
                    if(element.availability.orenburg > 0) {
                        element.createProductCard("catalog__list")
                    }
                });
            } else if (nameCity.textContent =="Санкт-Петербург") {
                cards.forEach(element => {
                    if(element.availability.saintPetersburg > 0) {
                        element.createProductCard("catalog__list")
                    }
                });
            }
    }
    buttonAvailability.addEventListener('change', function (e) {
        if(buttonAvailability.checked) {
            document.querySelector('.catalog__list').innerHTML =""
            sortAvailability()
  } 
});

        allItem.addEventListener('click', function (e) {
        if(allItem.checked) {
            document.querySelector('.catalog__list').innerHTML = ""
            cards.forEach(element => {  
        element.createProductCard("catalog__list")
                    
        });
        }
});

const locationSublist = document.querySelector('.location__sublist');
    locationSublist.addEventListener('click', function (e) {
        setTimeout(() => {
            if(e.target.classList.contains("location__sublink") && buttonAvailability.checked) {
                sortAvailability()
            }
        }, 100);
    })
}