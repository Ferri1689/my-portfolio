import { createCard } from "./CreateCard.js";

export async function getArraygCard () {
    const response = await fetch('./data/data.json' , {
        headers : {
            email: "arseniybro10@gmail.com"
        }
    })
    const data = await response.json()
    
    return data
}

// export async function renderingCard (){
//     const data = await getArraygCard()
//     const cards = []
//     document.querySelector('.catalog__list').innerHTML = ""
//     for (let i = 0; i < data.length; i++) {
        
//         const card = new createCard(data[i].id, data[i].name, data[i].price, data[i].image.slice(1), data[i].rating, data[i].availability, data[i].goodsOfDay, data[i].type)
//         cards.push(card)
//     }
//     // console.log(cards);

//     // cards.forEach(element => {
//     //     element.createProductCard("catalog__list")
//     // });

    


// }

