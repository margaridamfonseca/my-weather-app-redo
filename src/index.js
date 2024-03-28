function provideCity(event){
    event.preventDefault();
    let searchInputElement = document.querySelector("#form-search-box")
    let cityElement = document.querySelector("h1")
    cityElement.innerHTML = searchInputElement.value
}



let searchFormElement = document.querySelector("#search-form")
searchFormElement.addEventListener("submit", provideCity)