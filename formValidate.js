import { sendForms } from "./sendForms.js";

export function makeValidateForm () {

    
    const validator = new JustValidate('.questions__form');

validator
  .addField(document.querySelector('#name'), [
    {
      rule: 'required',
      errorMessage: "введите имя",
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: "Минимум 3 символа",
    },
    {
      rule: 'maxLength',
      value: 20,
      errorMessage: "максимум 20 символов",

    },
  ])
  .addField(document.querySelector('#email'), [
    {
      rule: 'required',
      errorMessage: "введите почту",
    },
    {
      rule: 'email',
      errorMessage: "Почта введена не верно",
    },
  ])
  .addField(document.querySelector('#agree'), [
    {
        rule: "required",
        errorMessage: "Нужно согласиться",
        checked: true ,
    }
  ])
   .onSuccess (function ( ){
    event.preventDefault();
  sendForms()
})
}