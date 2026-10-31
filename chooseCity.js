export function chooseCity () {
    const btnLocationCity = document.querySelector('.location__city');
    btnLocationCity.addEventListener('click', function (e) {
        btnLocationCity.classList.toggle("location__city--active")
    });

    const locationSublist = document.querySelector('.location__sublist');
    locationSublist.addEventListener('click', function (e) {
        const cityName  = document.querySelector('.location__city-name');
        if(e.target.classList.contains("location__sublink")) {
            if(e.target.textContent == "Москва") {
                btnLocationCity.classList.remove("location__city--active")
                cityName.textContent = e.target.textContent
            } else if(e.target.textContent == "Оренбург") {
                btnLocationCity.classList.remove("location__city--active")
                cityName.textContent = e.target.textContent
            } else if(e.target.textContent == "Санкт-Петербург") {
                btnLocationCity.classList.remove("location__city--active")
                cityName.textContent = e.target.textContent
            }
        }
    });
}