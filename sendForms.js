window.addEventListener('DOMContentLoaded', function (e) {
    const modulWindow = document.querySelector('.modul-window');
    const modulWindowClose = document.querySelector('.modul-window__close')

    modulWindowClose.addEventListener('click', function (e) {
                    modulWindow.style.display = "none"

        });

});


export async function sendForms() {

    const name = document.querySelector('#name');
        const email = document.querySelector('#email');
        const agreeCheckbox = document.querySelector('#agree');

        const modulWindow = document.querySelector('.modul-window');
        const modulWindowTitle = document.querySelector('.modul-window__title')
        const modulWindowText = document.querySelector('.modul-window__text')
        const modulWindowIcon = document.querySelector('.modul-window__icon')
        const modulWindowClose = document.querySelector('.modul-window__close')
        
    
    try {
        
        const response = await fetch("https://httpbin.org/post" , {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                email: "arseniybro10@gmail.com"
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
            }
            )
        })
        
if (!response.ok) {
            const er = new Error(`HTTP ошибка: ${response.status} ${response.statusText}`);
            throw er
        }
        
        modulWindow.style.display = "block"

        modulWindowTitle.textContent = "Благодарим за обращение!"
        modulWindowText.textContent = "Мы получили вашу заявку и свяжемся с вами в ближайшее время"
        modulWindowIcon.innerHTML = `<use xlink:href="images/sprite.svg#icon-succes"></use>`

        
    
       
    } catch (error) {
        modulWindow.style.display = "block"
        modulWindowTitle.textContent = "Не удалось отправить обращение"
        modulWindowText.textContent = "Что-то пошло не так, попробуйте отправить форму еще раз. Если ошибка повторится — свяжитесь со службой поддержки."
        modulWindowIcon.innerHTML = `<use xlink:href="images/sprite.svg#icon-warning"></use>`
        console.error(error)
    }

        name.value = ""
        email.value =""
        agreeCheckbox.checked = false
}

