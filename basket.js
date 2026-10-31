import { getArraygCard } from "./getArraygCard.js";
import { createCard } from "./CreateCard.js";

export async function getBscket () {
    // открывание и закрывание меню корзины
    const basketBtn = document.querySelector('.header__user-btn');
    const basket = document.querySelector('.basket');
    basketBtn.addEventListener('click', function (e) {
        basket.classList.toggle("basket--active")
    });

    // отображение количества товаров в корзине
    const basketCountEl = document.querySelector('.header__user-count');
    

    //
    const data = await getArraygCard()
     const cards = []
     for (let i = 0; i < data.length; i++) {
        const card = new createCard(data[i].id, data[i].name, data[i].price, data[i].image.slice(1), data[i].rating, data[i].availability, data[i].goodsOfDay, data[i].type)
        cards.push(card)
        }
    
    setTimeout(() => {
        const basketLink = document.querySelector('.basket__order-link');
    basketLink.style.background = "#9BE198"
    basketLink.style.padding = "12px"
    basketLink.style.display = "none"
    basketLink.style.textAlign = "center"
    basketLink.style.width = "100%"
    basketLink.style.borderRadius = "8px"
      

        const allBtnBasketAdd = document.querySelectorAll('.btn--icon');
        const allCardsInBasket = JSON.parse(localStorage.getItem("cards")) || []
        let basketCount = localStorage.getItem("basketCount") || 0
        basketCountEl.textContent = basketCount
        basketCountEl.textContent = basketCount
        allCardsInBasket.forEach(productBAsket => {
            cards.forEach(product => {
               if(productBAsket == product.id){
                product.createBasketCard()
               }
            });;
        });

        if (basketCount > 0) {
                document.querySelector('.basket__empty-block').style.display = "none";
                basketLink.style.display = "block";
            }
        
        
    

    

    


    

        allBtnBasketAdd.forEach(element => {
            element.addEventListener('click', function (e) {
                e.preventDefault()
                
                for (let i = 0; i < cards.length; i++) {
                    if(e.target.dataset.dataId == i)
                        cards.forEach(element => {
                            if(element.id == i) {
                                element.createBasketCard()
                                basketCountEl.textContent = ++basketCount
                                allCardsInBasket.push(element.id)
                                localStorage.setItem("cards", JSON.stringify(allCardsInBasket))
                                localStorage.setItem("basketCount", basketCount)


                                document.querySelector('.basket__empty-block').style.display = "none"
                                basketLink.style.display = "block"
                                const allBasketIconClose = document.querySelectorAll('.basket__icon-close');
                                
                                
                            }
                        });
                    
                }
            });
        });

        document.querySelector('.basket__list').addEventListener('click', function (e) {
    if (e.target.parentNode.classList.contains("basket__icon-close")) {
        const basketIconClose = e.target.parentNode;
        const basketItem = basketIconClose.closest('.basket__item');
        
        if (basketItem) {
            const cardId = parseInt(basketIconClose.id);
            console.log('Удаление ID:', cardId);
            
            const index = allCardsInBasket.indexOf(cardId);
            if (index !== -1) {
                allCardsInBasket.splice(index, 1);
                localStorage.setItem("cards", JSON.stringify(allCardsInBasket));
            }
            
            basketItem.remove();
            basketCount--;
            if (basketCount < 0) basketCount = 0;
            basketCountEl.textContent = basketCount;
            localStorage.setItem("basketCount", String(basketCount));
            
            if (basketCount === 0) {
                document.querySelector('.basket__empty-block').style.display = "block";
                basketLink.style.display = "none";
            }
        }
    }
});

        
    
    }, 10);
}