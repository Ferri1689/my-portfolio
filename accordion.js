export function makeAccordionActive () {
    const accordion = document.querySelectorAll('.accordion__btn');
   document.querySelector('.faq__accordion').addEventListener('click', function (e) {
    
   if(e.target.classList.contains("accordion__btn")) {
    if(e.target.classList.contains("accordion__btn--active")) {
    e.target.classList.remove("accordion__btn--active")
   } else {
        accordion.forEach(element => {
    element.classList.remove("accordion__btn--active")
   });
    e.target.classList.add("accordion__btn--active")
   }
    }
   });
}