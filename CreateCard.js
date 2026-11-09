import { getArraygCard } from "./getArraygCard.js";

export class createCard {
        id = ""
        name = ""
        price = ""
        image = ""
        rating = ""
    constructor (id, name, price, image, rating, availability, goodsOfDay, type) {
        this.id = id
        this.name = name
        this.price = price
        this.image = image
        this.rating = rating
        this.availability = availability
        this.goodsOfDay = goodsOfDay
        this.type = type
    }

    async getArraygCard () {
    const response = await fetch('./data.json' , {
        headers : {
            email: "arseniybro10@gmail.com"
        }
    })
    this.data = await response.json()
    console.log(data);
    }

    createProductCard (parent, childClass){
        this.catalogItem = document.createElement("li");
        this.catalogItem.classList.add("catalog__item")
        const productCard = document.createElement("div");
        productCard.classList.add("product-card")
        productCard.classList.add(childClass)
        this.catalogItem.append(productCard)
        this.createProductCardLink()
        this.createProductCardVisual()
        this.createProductCardInfo()
        this.createProductCardPrice()   
        productCard.append(this.productCardVisual, this.productCardInfo)
        document.querySelector(`.${parent}`).append(this.catalogItem)

    }

    createProductCardVisual() {
        this.productCardVisual = document.createElement("div");
        this.productCardVisual.classList.add("product-card__visual")
        this.productCardImg = document.createElement("img");
        this.productCardImg.classList.add("product-card__img")
        this.productCardImg.src = this.image
        this.productCardVisual.append(this.productCardImg, this.productCardMore)
    }

    createProductCardLink () {
        this.productCardMore = document.createElement("div");
        this.productCardMore.classList.add("product-card__more")
        const productCardLink = document.createElement("a");
        productCardLink.classList.add("product-card__link")
        productCardLink.classList.add("btn")
        productCardLink.classList.add("btn--icon")
        productCardLink.dataset.dataId = this.id
        productCardLink.href = "#"
        productCardLink.innerHTML = `
        <span class="btn__text">В корзину</span>
                      <svg width="24" height="24" aria-hidden="true">
                        <use xlink:href="images/sprite.svg#icon-basket"></use>
                      </svg>`
        const productCardLinkSecond = document.createElement("a");
        productCardLinkSecond.classList.add("product-card__link")
        productCardLinkSecond.classList.add("btn")
        productCardLinkSecond.classList.add("btn--secondary")
        productCardLinkSecond.textContent = "Подробнее"
        productCardLinkSecond.href = "#"
         this.productCardMore.append(productCardLink, productCardLinkSecond)
    }

    createProductCardInfo() {
        this.productCardInfo = document.createElement("div");
        this.productCardInfo.classList.add("product-card__info")
        this.productCardInfoTitle = document.createElement("h2");
        this.productCardInfoTitle.classList.add("product-card__title")
        this.productCardInfoTitle.textContent = this.name
    }

    createProductCardPrice () {
         const productCardOld = document.createElement("span");
        productCardOld.classList.add("product-card__old")
        const productCardOldNumber = document.createElement("span");
        productCardOldNumber.classList.add("product-card__old-number")
        productCardOldNumber.textContent = this.price.old
        const productCardOldAdd = document.createElement("span");
        productCardOldAdd.classList.add("product-card__old-add");
        productCardOldAdd.textContent = " ₽"
        productCardOld.append(productCardOldNumber, productCardOldAdd)
        const productCardPrice = document.createElement("span");
        productCardPrice.classList.add("product-card__price")
        const productCardPriceNumber = document.createElement("span");
        productCardPriceNumber.classList.add("product-card__price-number")
        productCardPriceNumber.textContent = this.price.new
        const productCardPriceAdd = document.createElement("span");
        productCardPriceAdd.classList.add("product-card__price-add");
        productCardPriceAdd.textContent = " ₽"
        productCardPrice.append(productCardPriceNumber, productCardPriceAdd)
        this.createProductCardTooltip()
        this.productCardInfo.append(this.productCardInfoTitle, productCardOld, productCardPrice, this.productCardInfoTooltip)
    }

    createProductCardTooltip() {
        this.productCardInfoTooltip = document.createElement("div");
        this.productCardInfoTooltip.classList.add("tooltip")
        this.productCardInfoTooltip.classList.add("product-card__tooltip")
        this.productCardInfoTooltip.innerHTML = `<button class="tooltip__btn" aria-label="Показать подсказку">
                      <svg class="tooltip__icon" width="5" height="10" aria-hidden="true">
                        <use xlink:href="images/sprite.svg#icon-i"></use>
                      </svg>
                    </button>
                    `
                    this.productCardInfoTooltipContent = document.createElement("div");
                    this.productCardInfoTooltipContent.classList.add("tooltip__content")
                    this.productCardInfoTooltipContent.innerHTML = `
                    
                      <span class="tooltip__text">Наличие товара по городам:</span>
                      <ul class="tooltip__list">
                        <li class="tooltip__item">
                          <span class="tooltip__text">Москва: <span class="tooltip__count">${this.availability.moscow}</span></span>
                        </li>
                        <li class="tooltip__item">
                          <span class="tooltip__text">Оренбург: <span class="tooltip__count">${this.availability.orenburg}</span></span>
                        </li>
                        <li class="tooltip__item">
                          <span class="tooltip__text">Санкт-Петербург: <span class="tooltip__count">${this.availability.saintPetersburg}</span></span>
                        </li>
                      </ul>`

                      this.tooltip()
    }


    createCardsGoodOfDay (parent) {
      this.catalogItemCardsDay = document.createElement("li");
        this.catalogItemCardsDay.classList.add("day-products__item")
        this.catalogItemCardsDay.classList.add("swiper-slide")
        const productCard = document.createElement("div");
        productCard.classList.add("product-card")
        productCard.classList.add("product-card--small")
        this.catalogItemCardsDay.append(productCard)
        this.createProductCardLink()
        this.createProductCardVisual()
        this.createProductCardInfo()
        this.createProductCardPrice()   
        productCard.append(this.productCardVisual, this.productCardInfo)
        document.querySelector(`.${parent}`).append(this.catalogItemCardsDay)
    }

    createBasketCard () {
      const BasketItem = document.createElement("li");
      BasketItem.classList.add("basket__item")
      const basketImg = document.createElement("img");
      basketImg.src = this.image
      basketImg.classList.add("basket__img")
      const basketName = document.createElement("p");
      basketName.textContent = this.name;
      const basketPrice = document.createElement("span");
      basketPrice.textContent = this.price.new
      const basketIconClose = document.createElement("span");
      basketIconClose.innerHTML = `<svg class="modul-window__close" width="24" height="24" aria-hidden="true">
            <use xlink:href="images/sprite.svg#icon-close"></use>
          </svg>`
          basketIconClose.classList.add("basket__icon-close")
          basketIconClose.id = this.id
      BasketItem.append(basketImg, basketName, basketPrice, basketIconClose)
      document.querySelector('.basket__list').append(BasketItem)
    }

    async tooltip () {
      setTimeout(() => {
        tippy(this.productCardInfoTooltip, {
      content: this.productCardInfoTooltipContent.innerHTML,
      trigger: 'click', // Открываем по клику
      allowHTML: true,
      
    });
    }, 100);
    }

    

    test(){
        
    }

}
