export function getBurgerMenu () {
    const btnBurgerMenu = document.querySelector('.header__catalog-text');
    btnBurgerMenu.addEventListener('click', function (e) {
        document.querySelector('.main-menu').classList.add("main-menu--active")
    });

    const closeMainMenu = document.querySelector('.main-menu__icon');
    closeMainMenu.addEventListener('click', function (e) {
        document.querySelector('.main-menu').classList.remove("main-menu--active")
    });

}