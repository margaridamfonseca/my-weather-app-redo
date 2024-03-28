function weatherUpdate(response){
    let temperatureElement = document.querySelector("#weather-app-temperature-value");
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("h1")
    cityElement.innerHTML = response.data.city;
}


function searchCity(city){
    let apiKey ="8dod4a3bd4def17f159b978bb700cbt9"
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric` 
    axios.get(apiUrl).then(weatherUpdate);
}

function provideCity(event){
    event.preventDefault();
    let searchInputElement = document.querySelector("#form-search-box")
    searchCity(searchInputElement.value)
}



let searchFormElement = document.querySelector("#search-form")
searchFormElement.addEventListener("submit", provideCity)

searchCity("Lisbon")