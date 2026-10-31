import { getArraygCard } from "./getArraygCard.js";
import { createCard } from "./CreateCard.js";
import {renderingSortCard } from "./sosrtCards.js"

export async function filterCards (){
    let checked = false
    
    let pendantChecked = false
    let ceilingChecked = false
    let overheadChecked = false
    let pointChecked = false
    let nightlightsChecked = false                                

    const pendant = document.querySelector('#pendant');
    const ceiling = document.querySelector('#ceiling');
    const overhead = document.querySelector('#overhead')
    const point = document.querySelector('#point');
    const nightlights = document.querySelector('#nightlights');
     // НАКЛАДНЕЫЕ

     const data = await getArraygCard()
     const cards = []
     for (let i = 0; i < data.length; i++) {
        const card = new createCard(data[i].id, data[i].name, data[i].price, data[i].image.slice(1), data[i].rating, data[i].availability, data[i].goodsOfDay, data[i].type)
        cards.push(card)
        }

        pendant.addEventListener('change', function (e) {
        if(pendant.checked) {
            pendantChecked = true
        } else {
            pendantChecked = false
        }
     });

     ceiling.addEventListener('change', function (e) {
        if(ceiling.checked) {
            ceilingChecked = true
        } else {
            ceilingChecked = false
        }
     });

     overhead.addEventListener('change', function (e) {
        if(overhead.checked) {
            overheadChecked = true
        } else {
            overheadChecked = false
        }
     });

     point.addEventListener('change', function (e) {
        if(point.checked) {
            pointChecked = true
        } else {
            pointChecked = false
        }
     });

     nightlights.addEventListener('change', function (e) {
        if(nightlights.checked) {
            nightlightsChecked = true
        } else {
            nightlightsChecked = false
        }
     });

     document.querySelector('.catalog-form__list-col').addEventListener('click', function (e) {
        
        setTimeout(() => {
            if(e.target.classList.contains("custom-checkbox__field")) {
            console.log(pendantChecked);
            document.querySelector('.catalog__list').innerHTML = ""
            const filterProducts = []
            if(pendantChecked) {
                cards.forEach(element => {
                    if(element.type.includes("pendant")){
            element.createProductCard("catalog__list")
            filterProducts.push(element)
        } });
            } if (ceilingChecked) {
            cards.forEach(element => {
                    if(element.type.includes("ceiling")){
            element.createProductCard("catalog__list")
            filterProducts.push(element)
        } });
            }  if (overheadChecked) {
                cards.forEach(element => {
                    if(element.type.includes("overhead")){
            element.createProductCard("catalog__list")
            filterProducts.push(element)
        } });
            }  if (pointChecked) {
                cards.forEach(element => {
                    if(element.type.includes("point")){
            element.createProductCard("catalog__list")
            filterProducts.push(element)
        } });
            }  if (nightlightsChecked) {
                cards.forEach(element => {
                    if(element.type.includes("nightlights")){
            element.createProductCard("catalog__list")
            filterProducts.push(element)
        } });
            }
            const sortSelect = document.querySelector('.catalog__sort-select')

            sortSelect.value = "price-min"

            setTimeout(() => {
                sortSelect.addEventListener('change', function (e) {
                    renderingSortCard(filterProducts)
                });
            }, 10);

            
        }

                setTimeout(() => {
                    if(pendantChecked == false && ceilingChecked == false && overheadChecked == false && pointChecked == false && nightlightsChecked == false) {
            cards.forEach(element => {
                element.createProductCard("catalog__list")
            });
        }
                }, );
        }, );


     });

     document.querySelector('.catalog-form__reset').addEventListener('click', function (e) {
        document.querySelector('.catalog__list').innerHTML = ""
        cards.forEach(element => {
            element.createProductCard("catalog__list")
        });
     });
}